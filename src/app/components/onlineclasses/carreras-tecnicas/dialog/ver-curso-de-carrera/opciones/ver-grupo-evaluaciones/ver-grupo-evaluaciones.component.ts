import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Miembro } from '../../../../../interface/general';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../../../service/general.service';
import { Router } from '@angular/router';
import { RegCursosComponent } from '../../../../../cursos/dialog/reg-cursos/reg-cursos.component';
import Swal from 'sweetalert2';
import { AgregarEditarGrupoEvaluacionesComponent } from './agregar-editar-grupo-evaluaciones/agregar-editar-grupo-evaluaciones.component';
@Component({
  selector: 'app-ver-grupo-evaluaciones',
  templateUrl: './ver-grupo-evaluaciones.component.html',
  styleUrls: ['./ver-grupo-evaluaciones.component.scss']
})
export class VerGrupoEvaluacionesComponent {

  loading: boolean = false;

  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  @Input() miembro: Miembro[] = [];
  @Output() miembrosActualizados = new EventEmitter<Miembro[]>();

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
    console.log("grupoEvaluaciones", this.config.data.data);
    this.grupoEvaluaciones = this.config.data.data;
    console.log("Grupo Evaluaciones", this.grupoEvaluaciones);
    this.listarGrupoEvaluaciones();
  }

  listarGrupoEvaluaciones() {
    this.grupoEvaluacionesService.getCursos(this.grupoEvaluaciones.id).subscribe((response: any) => {
      console.log("Lista de Carreras Técnicas", response);
      this.grupoEvaluacionesList = response;
      this.originalgrupoEvaluacionesList = [...response];
      this.calcularTotales();
    });
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
    this.ref = this.dialogService.open(AgregarEditarGrupoEvaluacionesComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'add', idCurso: this.grupoEvaluaciones.id }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarGrupoEvaluaciones();
    });
  }

  navigateToDetalle(data: any) {
    this.ref = this.dialogService.open(RegCursosComponent, {
      width: '80%',
      styleClass: 'custom-dialog-header',
      data: { id: this.config.data.data.id, total_creditos: this.config.data.data.total_creditos, acciones: 'ver', data: data }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarGrupoEvaluaciones();
    });
  }

  navigateToEdit(data: any) {
    this.ref = this.dialogService.open(RegCursosComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { id: this.config.data.data.id, total_creditos: this.config.data.data.total_creditos, acciones: 'editar', data: data }
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
        this.grupoEvaluacionesService.eliminarCurso(id).subscribe(
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

  verEvaluaciones(evaluaciones: any) {
    console.log(evaluaciones);
  }
}