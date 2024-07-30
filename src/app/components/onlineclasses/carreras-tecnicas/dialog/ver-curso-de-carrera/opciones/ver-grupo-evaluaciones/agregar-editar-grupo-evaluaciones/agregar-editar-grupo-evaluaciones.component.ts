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

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    private cdr: ChangeDetectorRef,
    public config: DynamicDialogConfig,   
    private parametroService: GeneralService,
    private router: Router,
  ) {
    this.idCurso = this.config.data.id;
    this.parametroForm = this.fb.group({
      nombreGrupo: ['', Validators.required],
    });

  }

  guardarGrupoEvaluaciones() {
    if (this.parametroForm.valid) {
      console.log('Formulario válido', this.parametroForm.value);
      const parametros ={
        nombre_del_grupo: this.parametroForm.value.nombreGrupo,
        curso_id: this.idCurso
      }
      this.parametroService.guardarGrupoEvaluaciones(parametros).subscribe(
        (response: any) => {
          this.ref?.close();
          Swal.fire({
            title: '¡Éxito!',
            text: 'Los Datos se registraron correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            
          });
        },
        (error: any) => {
          console.error('Error al guardar el parametro', error);
          // Aquí puedes manejar el error, como mostrar un mensaje de error
        }
      );
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