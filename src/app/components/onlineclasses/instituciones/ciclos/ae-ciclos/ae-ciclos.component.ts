import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HelpersService } from 'src/app/helpers.service';

@Component({
  selector: 'app-ae-ciclos',
  templateUrl: './ae-ciclos.component.html',
  styleUrls: ['./ae-ciclos.component.scss']
})
export class AeCiclosComponent {

  loading: boolean = false;
  parametroForm: FormGroup;
  acciones: any;
  domain_id = this.helpersService.getDominioId();
  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private parametroService: GeneralService,
    private helpersService: HelpersService
  ) {

    this.acciones = this.config.data.acciones;

    this.parametroForm = this.fb.group({
      nombre: ['', Validators.required],
      color: [''],
      orden: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]]

    });

  }

  ngOnInit(): void {
    if (this.acciones === 'ver' || this.acciones === 'actualizar') {
      this.parametroForm.patchValue({
        nombre: this.config.data.data.nombre,
        color: this.config.data.data.color,
        orden: this.config.data.data.orden,
      });
    }
  }


  guardarCiclos() {
    if (this.parametroForm.valid) {
      const areaFormacion = this.parametroForm.value;
      if (this.acciones === 'actualizar') {
        // Modo edición
        const params = {
          ...areaFormacion,
          id: this.config.data.data.id
        }
        this.parametroService.actualizarCiclos(params).subscribe(
          (response: any) => {
            this.ref?.close();
            Swal.fire({
              title: '¡Éxito!',
              text: 'Los Datos se actualizaron correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            }).then(() => {
              // Aquí puedes agregar lógica adicional después de la actualización
            });
          },
          (error: any) => {
            console.log(error.error.status);
            if (error.error.status = "exists") {
              this.helpersService.showConfirmDialog('El orden ya existe, ¿Desea actualizarlo?',
                () => {
                  this.updateOrden({
                    ...params,
                    domain_id: this.domain_id
                  }
                  );
                  this.ref?.close();
                }
              );
            }
            console.error('Error al actualizar el parametro', error);
            // Aquí puedes manejar el error, como mostrar un mensaje de error
          }
        );
      } else {
        // Modo creación
        this.parametroService.guardarCiclos(areaFormacion).subscribe(
          (response: any) => {
            this.ref?.close();
            Swal.fire({
              title: '¡Éxito!',
              text: 'Los Datos se registraron correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            }).then(() => {
              // Aquí puedes agregar lógica adicional después de la creación
            });
          },
          (error: any) => {
            console.log(error.status);
            if (error.error.status = "exists") {
              this.helpersService.showConfirmDialog('El orden ya existe, ¿Desea actualizarlo?',
                () => {
                  this.updateOrden(areaFormacion);
                  //closeModal(event);
                  this.ref?.close();
                }
              );
            }
            console.error('Error al guardar el parametro', error);
            // Aquí puedes manejar el error, como mostrar un mensaje de error
          }
        );
      }
    } else {
      console.error('Formulario inválido');
      // Aquí puedes manejar el caso de formulario inválido, como mostrar un mensaje de error
    }
  }
  updateOrden(data: any) {
    this.parametroService.updateOrdenCiclos(data).subscribe(
      (response: any) => {
        Swal.fire({
          title: '¡Éxito!',
          text: 'Los Datos se actualizaron correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          // Aquí puedes agregar lógica adicional después de la actualización
        });
      },
      (error: any) => {
        console.error('Error al actualizar el parametro', error);
        // Aquí puedes manejar el error, como mostrar un mensaje de error
      }
    );
  }
  closeModal(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    this.ref?.close();
  }
}
