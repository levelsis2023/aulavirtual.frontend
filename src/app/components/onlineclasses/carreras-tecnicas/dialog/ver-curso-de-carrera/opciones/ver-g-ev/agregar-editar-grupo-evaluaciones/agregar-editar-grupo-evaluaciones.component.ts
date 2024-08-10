import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../../../../service/general.service';
import { Parametro } from '../../../../../../interface/general';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';	
@Component({
  selector: 'app-agregar-editar-grupo-evaluaciones',
  templateUrl: './agregar-editar-grupo-evaluaciones.component.html',
  styleUrls: ['./agregar-editar-grupo-evaluaciones.component.scss']
})
export class AgregarEditarGrupoEvaluacionesComponent {

  loading: boolean = false;
  parametroDatos: Parametro = new Parametro();
  parametro: Parametro = new Parametro();
  mostrarCursos = false;
  parametroForm: FormGroup;
  idCurso: any;
  acciones: any;
  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,   
    private parametroService: GeneralService,
  ) {
  
    this.parametroForm = this.fb.group({
      nombreGrupo: ['', Validators.required],
    });

  }
  ngOnInit(): void {
    this.idCurso = this.config.data.idCurso;
    this.acciones = this.config.data.acciones;

    if (this.acciones === 'ver' || this.acciones === 'actualizar') {
    this.parametroForm.patchValue({
      nombreGrupo: this.config.data.data.nombre_del_grupo
    });
  }
  }

  guardarGrupoEvaluaciones() {
    if (this.parametroForm.valid) {
        const parametros = {
            nombre_del_grupo: this.parametroForm.value.nombreGrupo,
            curso_id: this.idCurso
        };

        if (this.acciones === 'add') {
            this.parametroService.guardarGrupoEvaluaciones(parametros).subscribe(
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
            nombre_del_grupo: this.parametroForm.value.nombreGrupo,
            id:  this.config.data.data.id
          };
            this.parametroService.actualizarGrupoEvaluaciones(parametros).subscribe(
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