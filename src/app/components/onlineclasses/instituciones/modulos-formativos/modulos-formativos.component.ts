import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../service/general.service';
import Swal from 'sweetalert2';	
import { AeModulosFormativosComponent } from './ae-modulos-formativos/ae-modulos-formativos.component';




@Component({
  selector: 'app-modulos-formativos',
  templateUrl: './modulos-formativos.component.html',
  styleUrls: ['./modulos-formativos.component.scss']
})
export class ModulosFormativosComponent {


  loading: boolean = false;
  moduloFormativoList: any[] = [];
  originalmoduloFormativoList: any[] = [];
  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private areasDeFormacionService: GeneralService,
  ) { }

  ngOnInit(): void {

    this.listarModulosFormativos();

  }

  listarModulosFormativos() {
    this.areasDeFormacionService.getModulosFormativos().subscribe((response: any) => {
      
        this.moduloFormativoList = response;
        this.originalmoduloFormativoList = [...response];
    });
}


  navigateAddCurso() {
    this.ref = this.dialogService.open(AeModulosFormativosComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'add' }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarModulosFormativos();
    });
  }

  navigateToDetalle(data: any) {
    this.ref = this.dialogService.open(AeModulosFormativosComponent, {
      width: '80%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'ver', data: data }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarModulosFormativos();
    });
  }

  navigateToEdit(data: any) {
    this.ref = this.dialogService.open(AeModulosFormativosComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'actualizar', data: data }
     });

    this.ref.onClose.subscribe((data: any) => {
      this.listarModulosFormativos();
    });
  }

  navigateToDelete(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      customClass: {
        popup: 'custom-swal-popup'
      },
      didOpen: () => {
        const container = document.querySelector('.swal2-container');
        if (container) {
          container.setAttribute('style', 'z-index: 2147483647 !important');
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.areasDeFormacionService.eliminarModulosFormativos(id).subscribe(
          response => {
            Swal.fire({
              title: 'Eliminado',
              text: 'La carrera técnica ha sido eliminada.',
              icon: 'success',
              showClass: {
                popup: `
                  background-color: #78CBF2;
                  color: white;
                  z-index: 10000!important;
                `
              },
              didOpen: () => {
                const container = document.querySelector('.swal2-container');
                if (container) {
                  container.setAttribute('style', 'z-index: 2147483647 !important');
                }
              }
            });
            this.listarModulosFormativos();
          },
          error => {
            Swal.fire(
              'Error',
              'Hubo un problema al eliminar la carrera técnica.',
              'error'
            );
          }
        );
      }
    });
  }

  onGlobalFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    if (!filterValue) {
      this.moduloFormativoList = [...this.originalmoduloFormativoList];
      return;
    }

    this.moduloFormativoList = this.originalmoduloFormativoList.filter(area =>
      (area.nombre.toLowerCase().includes(filterValue)) 
    );
  }


}