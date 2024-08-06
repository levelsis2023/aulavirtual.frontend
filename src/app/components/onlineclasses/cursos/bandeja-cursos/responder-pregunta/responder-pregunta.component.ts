import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import { Parametro } from '../../../interface/general';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { format } from 'date-fns';
import { HelpersService } from 'src/app/helpers.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-responder-pregunta',
  templateUrl: './responder-pregunta.component.html',
  styleUrls: ['./responder-pregunta.component.scss']
})
export class ResponderPreguntaComponent {


  loading: boolean = false;
  parametroDatos: Parametro = new Parametro();
  parametro: Parametro = new Parametro();
  mostrarCursos = false;
  idEvaluacion: any;
  acciones: any;
  tiposEvaluacion: any;
  estados: any;
  preguntaForm: FormGroup;
  tiposPregunta = [];
  sanitizePregunta: SafeHtml = '';
  preguntaDocenteValue :any
  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private parametroService: GeneralService,
    private helpersService: HelpersService,
    private sanitizer: DomSanitizer

  ) {
    this.preguntaForm = this.fb.group({
      tipoPregunta: ['', Validators.required],
      valor_pregunta: ['', Validators.required],
      pregunta_docente: ['', Validators.required],
      alternativas: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.idEvaluacion = this.config.data.idEvaluacion;
    this.acciones = this.config.data.acciones;
    this.sanitizePregunta = this.sanitizer.bypassSecurityTrustHtml(this.config.data.data.pregunta_docente);
    this.preguntaDocenteValue = this.config.data.data.pregunta_docente; // Accede al valor real
    console.log(this.preguntaDocenteValue['changingThisBreaksApplicationSecurity'],'as');
    console.log(this.sanitizePregunta);
    Promise.all([
      this.listarDePregunta(),
    ]).then(() => {
      if (this.acciones === 'ver' || this.acciones === 'actualizar' || this.acciones === 'alumno') {
        this.preguntaForm.patchValue({
          tipoPregunta: this.config.data.data.tipo_de_evaluacion_id,
          valor_pregunta: this.config.data.data.valor_pregunta,
          pregunta_docente:   this.preguntaDocenteValue['changingThisBreaksApplicationSecurity'],
     
        });

        this.setAlternativasv2(this.config.data.data.alternativas);

      }
    });
  }

  setAlternativasv2(alternativas: any[]): void {
    const alternativasFormArray = this.preguntaForm.get('alternativas') as FormArray;
    alternativas.forEach(alternativa => {
      alternativasFormArray.push(this.fb.group({
        texto: [alternativa.texto, Validators.required],
        respuesta_correcta_seleccionada: [false, Validators.required]
      }));
    });
  }
  
  // Method to handle radio button change
  onRadioChange(selectedIndex: number): void {
    const alternativas = this.preguntaForm.get('alternativas') as FormArray;
    alternativas.controls.forEach((control, index) => {
      const respuestaCorrectaControl = control.get('respuesta_correcta_seleccionada');
      if (respuestaCorrectaControl) {
        respuestaCorrectaControl.setValue(index === selectedIndex);
      }
    });
  }
  listarDePregunta(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.parametroService.getTipoDePregunta().subscribe(
        (response: any) => {
          console.log("Lista de getTipoDePregunta", response);
          this.tiposPregunta = response;
          resolve();
        },
        (error: any) => reject(error)
      );
    });
  }

  setAlternativas(alternativas: any[]): void {
    const alternativasFGs = alternativas.map(alternativa => this.fb.group(alternativa));
    const alternativasFormArray = this.fb.array(alternativasFGs);
    this.preguntaForm.setControl('alternativas', alternativasFormArray);
  }
  guardarRespuestaCorrecta() {
    const alternativas = this.preguntaForm.value.alternativas;
    const index = alternativas.findIndex((alternativa: any) => alternativa.respuesta_correcta_seleccionada === true);
    if (index !== -1) {

    }
  }
  guardarPregunta() {
    console.log(this.preguntaForm);
    if (this.preguntaForm.valid) {
      const parametros = {
        evaluacion_id: this.idEvaluacion,
        tipo_de_evaluacion_id: this.preguntaForm.value.tipoPregunta,
        pregunta_docente: this.preguntaForm.value.pregunta_docente,
        descripcion: this.preguntaForm.value.descripcion,
        respuesta_correcta_seleccionada: this.preguntaForm.value.alternativas.findIndex((alternativa: any) => alternativa.respuesta_correcta_seleccionada === true)+1,
        domain_id: this.helpersService.getDominioId(),
        valor_pregunta: this.preguntaForm.value.valor_pregunta,
        alternativas: this.preguntaForm.value.alternativas
      };
      console.log(parametros);
      if (this.acciones === 'add') {
        this.parametroService.guardarPreguntas(parametros).subscribe(
          (response: any) => {
            this.ref?.close();
            Swal.fire({
              title: '¡Éxito!',
              text: 'Los Datos se registraron correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            }).then(() => {
              // Acción adicional después de cerrar el modal
            });
          },
          (error: any) => {
            console.error('Error al guardar el parametro', error);
            // Aquí puedes manejar el error, como mostrar un mensaje de error
          }
        );
      } else if (this.acciones === 'actualizar') {
        const parametros = {
          observaciones: this.preguntaForm.value.observaciones,
          nombre: this.preguntaForm.value.nombreEvaluacion,
          tipo_evaluacion_id: this.preguntaForm.value.tipoEvaluacion,
          porcentaje_evaluacion: this.preguntaForm.value.porcentajeEvaluacion,
          fecha_y_hora_programo: this.preguntaForm.value.fechaHoraEvaluacion,
          estado_id: this.preguntaForm.value.estado,
          id: this.config.data.data.id
        };
        this.parametroService.actualizarListadoDeEvaluacionesPorGrupo(parametros).subscribe(
          (response: any) => {
            this.ref?.close();
            Swal.fire({
              title: '¡Éxito!',
              text: 'Los Datos se actualizaron correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            }).then(() => {
              // Acción adicional después de cerrar el modal
            });
          },
          (error: any) => {
            console.error('Error al actualizar el parametro', error);
            // Aquí puedes manejar el error, como mostrar un mensaje de error
          }
        );
      }
    } else {
      console.error('Formulario inválido');
      // Aquí puedes manejar el caso de formulario inválido, como mostrar un mensaje de error
    }
  }

  agregarAlternativa(): void {
    const alternativas = this.preguntaForm.get('alternativas') as FormArray;
    const newId = alternativas.length + 1;
    alternativas.push(this.fb.group({
      id: [newId],
      texto: ['', Validators.required],
      respuesta_correcta_seleccionada: [false]
    }));
  }

  closeModal(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    this.ref?.close();
  }
  getAlternativasControls() {
    return (this.preguntaForm.get('alternativas') as FormArray).controls;
}
  onTipoPreguntaChange(value: any) {
    // Define the action you want to perform here
    console.log('Tipo de Pregunta changed to:', value);
    // Add your custom logic here
  }
}