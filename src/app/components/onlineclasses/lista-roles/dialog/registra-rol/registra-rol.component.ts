import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import Swal from 'sweetalert2';
import { GeneralService } from '../../../service/general.service';

@Component({
  selector: 'app-registra-rol',
  templateUrl: './registra-rol.component.html',
  styleUrls: ['./registra-rol.component.scss']
})
export class RegistraRolComponent {

  visible: boolean = false;
  id: number = 0;
  nombre: string = '';

  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService,
    public ref: DynamicDialogRef,
    private rolService: GeneralService,
    public config: DynamicDialogConfig
  ) {

    if (this.config.data) {
      this.id = this.config.data.id
      this.nombre = this.config.data.nombre
    } else {
      this.id = 0
      this.nombre = ""

    }

  }


  Guardaruser() {
    // this.ref.close();
    const rol = {
      nombre: this.nombre
    }

    if (this.id > 0) {
      this.rolService.actualizarRol(rol, this.id).subscribe(
        (response: any) => {
          this.closeModal();
          Swal.fire({
            title: '¡Éxito!',
            text: 'Los Datos se registraron correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate([this.router.url]);

          });
        },
        (error: any) => {
          console.error('Error al guardar el rol', error);
        }
      );

    } else {
      this.rolService.guardarRol(rol).subscribe(
        (response: any) => {
          this.closeModal();
          Swal.fire({
            title: '¡Éxito!',
            text: 'Los Datos se registraron correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate([this.router.url]);

          });
        },
        (error: any) => {
          console.error('Error al guardar el rol', error);
        }
      );

      Swal.fire({
        title: '¡Éxito!',
        text: 'Los Datos se registraron correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {

      });
    }
  }

  closeDialog() {
    this.visible = false;
  }


  closeModal() {
    this.ref.close({ register: false });
  }
}
