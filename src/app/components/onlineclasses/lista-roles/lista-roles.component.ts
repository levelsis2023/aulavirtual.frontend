import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegistraRolComponent } from './dialog/registra-rol/registra-rol.component';
import { GeneralService } from '../service/general.service';
import { ListaPermisosComponent } from './dialog/lista-permisos/lista-permisos.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-postulantes',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.scss']
})
export class ListaRolesComponent {
  // datos = []

  ref: DynamicDialogRef | undefined;

  roles: any[] = [];
  rol: any[] = [];

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private rolService: GeneralService,
    private permisoService: GeneralService


  ) {

    this.rolService.getRoles().subscribe((response: any) => {
      console.log("Lista de Roles", response);
      this.roles = response;
    });

  }


  navigateToNuevo(id: number) {

    if (id > 0) {

      this.rolService.getRol(id).subscribe((response: any) => {
        console.log("Lista de Roles", response);
        this.rol = response;
        this.ref = this.dialogService.open(RegistraRolComponent, {
          width: '60%',
          styleClass: 'custom-dialog-header',
          data: this.rol
        });
        this.ref.onClose.subscribe((dataFromDialog) => {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
        });
        console.log(this.rol)

      });

    }
    else {
      this.ref = this.dialogService.open(RegistraRolComponent, {
        width: '60%',
        styleClass: 'custom-dialog-header'
      });

      this.ref.onClose.subscribe((dataFromDialog) => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
      });
    }
  }

  eliminar(id: number) {
    Swal.fire({
      title: "Eliminar rol",
      text: "Estás segurdo de eliminar el rol?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.rolService.eliminarRol(id).subscribe(
          (response: any) => {
            console.log('rol eliminado:', response);
            this.rolService.getRoles().subscribe((response: any) => {
              console.log("Lista de Roles", response);
              this.roles = response;
            });
          },
          (error: any) => {
            console.error('Error eliminando ciclo:', error);
          }
        );
      }
    });

  }

  listaPermisos(id: number) {

    this.ref = this.dialogService.open(ListaPermisosComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: id
    });

    this.ref.onClose.subscribe((dataFromDialog) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
    });
  }

  tienePermiso(nombrePermiso: string): boolean {
    return this.permisoService.tienePermiso(nombrePermiso);
  }

}
