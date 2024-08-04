import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../service/general.service';
import Swal from 'sweetalert2';	
import { AeEstadoCursoComponent } from './ae-estado-curso/ae-estado-curso.component';




@Component({
  selector: 'app-estado-cursos',
  templateUrl: './estado-cursos.component.html',
  styleUrls: ['./estado-cursos.component.scss']
})
export class EstadoCursosComponent {

  loading: boolean = false;
  estadoCursoList: any[] = [];
  originalestadoCursoList: any[] = [];
  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private areasDeFormacionService: GeneralService,
  ) { }

  ngOnInit(): void {

    this.listarEstadoCurso();

  }

  listarEstadoCurso() {
    this.areasDeFormacionService.getEstadoDeCurso().subscribe((response: any) => {
      
        this.estadoCursoList = response;
        this.originalestadoCursoList = [...response];
    });
}


  navigateAddCurso() {
    this.ref = this.dialogService.open(AeEstadoCursoComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'add' }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarEstadoCurso();
    });
  }

  navigateToDetalle(data: any) {
    this.ref = this.dialogService.open(AeEstadoCursoComponent, {
      width: '80%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'ver', data: data }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarEstadoCurso();
    });
  }

  navigateToEdit(data: any) {
    this.ref = this.dialogService.open(AeEstadoCursoComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'actualizar', data: data }
     });

    this.ref.onClose.subscribe((data: any) => {
      this.listarEstadoCurso();
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
        this.areasDeFormacionService.eliminarEstadoDeCurso(id).subscribe(
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
            this.listarEstadoCurso();
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
      this.estadoCursoList = [...this.originalestadoCursoList];
      return;
    }

    this.estadoCursoList = this.originalestadoCursoList.filter(area =>
      (area.nombre.toLowerCase().includes(filterValue)) 
    );
  }


}