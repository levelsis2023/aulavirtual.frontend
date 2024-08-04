import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../service/general.service';
import Swal from 'sweetalert2';	
import { AeCiclosComponent } from './ae-ciclos/ae-ciclos.component';



@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.scss']
})
export class CiclosComponent {


  loading: boolean = false;
  ciclosList: any[] = [];
  originalciclosList: any[] = [];
  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private areasDeFormacionService: GeneralService,
  ) { }

  ngOnInit(): void {

    this.listarCiclos();

  }

  listarCiclos() {
    this.areasDeFormacionService.getCiclos().subscribe((response: any) => {
      
        this.ciclosList = response;
        this.originalciclosList = [...response];
    });
}


  navigateAddCurso() {
    this.ref = this.dialogService.open(AeCiclosComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'add' }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarCiclos();
    });
  }

  navigateToDetalle(data: any) {
    this.ref = this.dialogService.open(AeCiclosComponent, {
      width: '80%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'ver', data: data }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarCiclos();
    });
  }

  navigateToEdit(data: any) {
    this.ref = this.dialogService.open(AeCiclosComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'actualizar', data: data }
     });

    this.ref.onClose.subscribe((data: any) => {
      this.listarCiclos();
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
        this.areasDeFormacionService.eliminarCiclos(id).subscribe(
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
            this.listarCiclos();
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
      this.ciclosList = [...this.originalciclosList];
      return;
    }

    this.ciclosList = this.originalciclosList.filter(area =>
      (area.nombre.toLowerCase().includes(filterValue)) 
    );
  }


}