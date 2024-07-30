import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../../../../service/general.service';
import { Parametro } from '../../../../../../interface/general';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { format } from 'date-fns';

@Component({
  selector: 'app-agregar-editar-lista-de-evaluaciones-por-grupo',
  templateUrl: './agregar-editar-lista-de-evaluaciones-por-grupo.component.html',
  styleUrls: ['./agregar-editar-lista-de-evaluaciones-por-grupo.component.scss']
})
export class AgregarEditarListaDeEvaluacionesPorGrupoComponent {

  loading: boolean = false;
  parametroDatos: Parametro = new Parametro();
  parametro: Parametro = new Parametro();
  mostrarCursos = false;
  parametroForm: FormGroup;
  idCurso: any;
  acciones: any;
  tiposEvaluacion: any;
  estados:any;

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private parametroService: GeneralService,
  ) {
    this.parametroForm = this.fb.group({
      observaciones: ['', Validators.required],
      nombreEvaluacion: ['', Validators.required],
      tipoEvaluacion: ['', Validators.required],
      porcentajeEvaluacion: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      fechaHoraEvaluacion: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.idCurso = this.config.data.idCurso;
    this.acciones = this.config.data.acciones;
    Promise.all([
      this.listarTipoEvaluacion(),
      this.listarEstados()
    ]).then(() => {
      if (this.acciones === 'ver' || this.acciones === 'actualizar') {
        const formattedDate = format(new Date(this.config.data.data.fecha_y_hora_programo), 'yyyy-MM-dd\'T\'HH:mm:ss');

        this.parametroForm.patchValue({
          nombreEvaluacion: this.config.data.data.nombre,
          tipoEvaluacion: this.config.data.data.tipo_evaluacion_id,
          porcentajeEvaluacion: this.config.data.data.porcentaje_evaluacion,
          fechaHoraEvaluacion: formattedDate,
          estado: this.config.data.data.estado_id,
          observaciones: this.config.data.data.observaciones
        });
      }
    });
  }

  listarEstados(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.parametroService.getEstados().subscribe(
        (response: any) => {
          console.log("Lista de listarEstados", response);
          this.estados = response;
          resolve();
        },
        (error: any) => reject(error)
      );
    });
  }

  listarTipoEvaluacion(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.parametroService.getTipoEvaluacion().subscribe(
        (response: any) => {
          console.log("Lista de TipoEvaluacion", response);
          this.tiposEvaluacion = response;
          resolve();
        },
        (error: any) => reject(error)
      );
    });
  }

  guardarEvaluacion() {
    if (this.parametroForm.valid) {
      const parametros = {
        observaciones: this.parametroForm.value.observaciones,
        nombre: this.parametroForm.value.nombreEvaluacion,
        tipo_evaluacion_id: this.parametroForm.value.tipoEvaluacion,
        porcentaje_evaluacion: this.parametroForm.value.porcentajeEvaluacion,
        fecha_y_hora_programo: this.parametroForm.value.fechaHoraEvaluacion,
        estado_id: this.parametroForm.value.estado,
        grupo_de_evaluaciones_id: this.config.data.idGrupoEvaluaciones,
        domain_id: 1
      };
      console.log(parametros);
      if (this.acciones === 'add') {
        this.parametroService.guardarEvaluacion(parametros).subscribe(
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
          observaciones: this.parametroForm.value.observaciones,
          nombre: this.parametroForm.value.nombreEvaluacion,
          tipo_evaluacion_id: this.parametroForm.value.tipoEvaluacion,
          porcentaje_evaluacion: this.parametroForm.value.porcentajeEvaluacion,
          fecha_y_hora_programo: this.parametroForm.value.fechaHoraEvaluacion,
          estado_id: this.parametroForm.value.estado,
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

  closeModal(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    this.ref?.close();
  }
}