import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../../../../service/general.service';
import { Parametro } from '../../../../../../interface/general';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { format } from 'date-fns';
import { HelpersService } from 'src/app/helpers.service';
@Component({
  selector: 'app-agregar-editar-listado-de-preguntas',
  templateUrl: './agregar-editar-listado-de-preguntas.component.html',
  styleUrls: ['./agregar-editar-listado-de-preguntas.component.scss']
})
export class AgregarEditarListadoDePreguntasComponent {
  
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
  alternativas: { texto: string }[] = [{ texto: '' }];
  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private parametroService: GeneralService,
    private helpersService: HelpersService
  ) {


    this.preguntaForm = this.fb.group({
      tipoPregunta: [''],
      formulacionPregunta: [''],
      descripcion: [''],
      correcta: [null],
      valor_pregunta : [null],
      pregunta_docente: [null],
        });
     
  }

  ngOnInit(): void {
    this.idEvaluacion = this.config.data.idEvaluacion;
    this.acciones = this.config.data.acciones;
    Promise.all([
      this.listarDePregunta(),

    ]).then(() => {
      if (this.acciones === 'ver' || this.acciones === 'actualizar') {
        const formattedDate = format(new Date(this.config.data.data.fecha_y_hora_programo), 'yyyy-MM-dd\'T\'HH:mm:ss');

        this.preguntaForm.patchValue({
          nombreEvaluacion: this.config.data.data.nombre,
          tipoEvaluacion: this.config.data.data.tipo_evaluacion_id,
          porcentajeEvaluacion: this.config.data.data.porcentaje_evaluacion,
          fechaHoraEvaluacion: formattedDate,
          estado: this.config.data.data.estado_id,
          observaciones: this.config.data.data.observaciones,
          preguntaMagica: this.config.data.data.pregunta_magica
        });
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

  guardarPregunta() {
    if (this.preguntaForm.valid) {
      const parametros = {
        evaluacion_id: this.idEvaluacion ,
        tipo_de_evaluacion_id: this.preguntaForm.value.tipoPregunta,
        pregunta_docente: this.preguntaForm.value.pregunta_docente,
        descripcion: this.preguntaForm.value.descripcion,
        respuesta_correcta: this.preguntaForm.value.correcta,
        domain_id: this.helpersService.getDominioId(),
        valor_pregunta: this.preguntaForm.value.valor_pregunta,
     
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

  agregarAlternativa() {
    this.alternativas.push({ texto: '' });
  }

  closeModal(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    this.ref?.close();
  }
  onTipoPreguntaChange(value: any) {
    // Define the action you want to perform here
    console.log('Tipo de Pregunta changed to:', value);
    // Add your custom logic here
  }
  
}