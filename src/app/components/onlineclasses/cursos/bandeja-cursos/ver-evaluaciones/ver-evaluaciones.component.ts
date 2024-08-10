import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { VerPreguntasComponent } from '../ver-preguntas/ver-preguntas.component';
import { VerListadoDeEvaluacionesPorGrupoComponent } from '../../../carreras-tecnicas/dialog/ver-curso-de-carrera/opciones/ver-lis-eval-grupo/ver-lis-eval-grupo.component';

@Component({
  selector: 'app-ver-evaluaciones',
  templateUrl: './ver-evaluaciones.component.html',
  styleUrls: ['./ver-evaluaciones.component.scss']
})

export class VerEvaluacionesComponent {

  loading: boolean = false;



  grupoEvaluacionesList: any[] = [];
  originalgrupoEvaluacionesList: any[] = [];

  ref: DynamicDialogRef | undefined;

  promedioTotal: number = 0;
  porcentajeTotal: number = 0;
  grupoEvaluaciones: any;


  constructor(
    private dialogService: DialogService,
    private grupoEvaluacionesService: GeneralService,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.grupoEvaluaciones = this.config.data.data;
    console.log(this.grupoEvaluaciones,'car');
    this.listarGrupoEvaluaciones();
  }

  listarGrupoEvaluaciones() {
    this.grupoEvaluacionesService.getListadoDeEvaluacionesPorCurso({id:this.grupoEvaluaciones.id}).subscribe((response: any) => {
      this.grupoEvaluacionesList = response;
      this.originalgrupoEvaluacionesList = [...response];
    });
  }
  navigateToResponder(data: any) {
  }

  calcularTotales() {
    let totalPromedio = 0;
    let totalPorcentaje = 0;
    this.grupoEvaluacionesList.forEach(carrera => {
      totalPromedio += carrera.promedio || 0;
      totalPorcentaje += carrera.porcentaje || 0;
    });
    this.promedioTotal = totalPromedio / this.grupoEvaluacionesList.length;
    this.porcentajeTotal = totalPorcentaje / this.grupoEvaluacionesList.length;
  }

  navigateAddCurso() {
    this.ref = this.dialogService.open(VerListadoDeEvaluacionesPorGrupoComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'add', idGrupoEvaluaciones: this.grupoEvaluaciones.id }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarGrupoEvaluaciones();
    });
  }

  navigateToDetalle(data: any) {
    this.ref = this.dialogService.open(VerListadoDeEvaluacionesPorGrupoComponent, {
      width: '80%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'ver', idCurso: this.grupoEvaluaciones.id ,data: data }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarGrupoEvaluaciones();
    });
  }

  navigateToEdit(data: any) {
    this.ref = this.dialogService.open(VerListadoDeEvaluacionesPorGrupoComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'actualizar', idCurso: this.grupoEvaluaciones.id ,data: data } 
     });

    this.ref.onClose.subscribe((data: any) => {
      this.listarGrupoEvaluaciones();
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
        this.grupoEvaluacionesService.eliminarListadoDeEvaluacionesPorGrupo(id).subscribe(
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
            this.listarGrupoEvaluaciones();
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
      this.grupoEvaluacionesList = [...this.originalgrupoEvaluacionesList];
      return;
    }

    this.grupoEvaluacionesList = this.originalgrupoEvaluacionesList.filter(carrera =>
      (carrera.codigo && carrera.codigo.toLowerCase().includes(filterValue)) ||
      (carrera.nombres && carrera.nombres.toLowerCase().includes(filterValue)) ||
      (carrera.cursos && carrera.cursos.toLowerCase().includes(filterValue))
    );
  }

  agregarPreguntas(evaluaciones: any) {
    this.ref = this.dialogService.open(VerPreguntasComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'alumno', grupoEvaluacionesId: this.grupoEvaluaciones.id ,data: evaluaciones } 
     });
  
    this.ref.onClose.subscribe((data: any) => {
      this.listarGrupoEvaluaciones();
    });
  }

  
}
