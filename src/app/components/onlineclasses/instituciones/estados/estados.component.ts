import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../service/general.service';
import Swal from 'sweetalert2';	
import { AeEstadosComponent } from './ae-estados/ae-estados.component';





@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent {

  loading: boolean = false;
  estadoList: any[] = [];
  originalestadoList: any[] = [];
  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private areasDeFormacionService: GeneralService,
  ) { }

  ngOnInit(): void {

    this.listarEstados();

  }

  listarEstados() {
    this.areasDeFormacionService.getEstados().subscribe((response: any) => {
      
        this.estadoList = response;
        this.originalestadoList = [...response];
    });
}


  navigateAddCurso() {
    this.ref = this.dialogService.open(AeEstadosComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'add' }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarEstados();
    });
  }

  navigateToDetalle(data: any) {
    this.ref = this.dialogService.open(AeEstadosComponent, {
      width: '80%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'ver', data: data }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarEstados();
    });
  }

  navigateToEdit(data: any) {
    this.ref = this.dialogService.open(AeEstadosComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'actualizar', data: data }
     });

    this.ref.onClose.subscribe((data: any) => {
      this.listarEstados();
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
        this.areasDeFormacionService.eliminarEstados(id).subscribe(
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
            this.listarEstados();
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
      this.estadoList = [...this.originalestadoList];
      return;
    }

    this.estadoList = this.originalestadoList.filter(area =>
      (area.nombre.toLowerCase().includes(filterValue)) 
    );
  }


}