import { Component, ElementRef, EventEmitter, Input, Output, ViewChild,OnInit } from '@angular/core';
import { Miembro } from '../../../../../interface/general';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../../../service/general.service';
import Swal from 'sweetalert2';
import { VerListadoDeEvaluacionesPorGrupoComponent } from '../ver-lis-eval-grupo/ver-lis-eval-grupo.component';
import { AgregarEditarListadoDePreguntasComponent } from './ae-listado-de-preguntas/agregar-editar-listado-de-preguntas.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CorregirPreguntasComponent } from 'src/app/components/onlineclasses/docentes/cursos-docentes/corregir-preguntas/corregir-preguntas.component';


@Component({
  selector: 'app-ver-listado-de-preguntas',
  templateUrl: './ver-listado-de-preguntas.component.html',
  styleUrls: ['./ver-listado-de-preguntas.component.scss']
})
export class VerListadoDePreguntasComponent implements OnInit {


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
  evaluaciones: any;

  constructor(
    private dialogService: DialogService,
    private grupoEvaluacionesService: GeneralService,
    public config: DynamicDialogConfig,
    private sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {
    this.evaluaciones = this.config.data.data;
    console.log(this.evaluaciones,'car');

    this.listarPreguntas();

  }

  listarPreguntas(): void {
    this.grupoEvaluacionesService.getPreguntas({ id: this.evaluaciones.id }).subscribe((response: any) => {
        // Iterar sobre cada elemento de la respuesta y asignar valores a 'puntos' y 'porcentaje'
        response.forEach((item: any) => {
            item.puntos = Math.floor(Math.random() * 20) + 1;
            item.porcentaje = (item.puntos * 20) / 100;
        });

        // Sanitizar el contenido HTML de 'pregunta_docente'
        this.grupoEvaluacionesList = response.map((pregunta: any) => {
          return {
            ...pregunta,
            pregunta_docente: this.sanitizer.bypassSecurityTrustHtml(pregunta.pregunta_docente)
          };
        });

        // Asignar la lista modificada a 'originalgrupoEvaluacionesList'
        this.originalgrupoEvaluacionesList = [...this.grupoEvaluacionesList];
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
    this.ref = this.dialogService.open(AgregarEditarListadoDePreguntasComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'add', idEvaluacion: this.evaluaciones.id }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarPreguntas();
    });
  }

  navigateToDetalle(data: any) {
    this.ref = this.dialogService.open(AgregarEditarListadoDePreguntasComponent, {
      width: '80%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'ver', idCurso: this.evaluaciones.id ,data: data }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarPreguntas();
    });
  }

  navigateToEdit(data: any) {
    this.ref = this.dialogService.open(AgregarEditarListadoDePreguntasComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'actualizar', idCurso: this.evaluaciones.id ,data: data } 
     });

    this.ref.onClose.subscribe((data: any) => {
      this.listarPreguntas();
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
        this.grupoEvaluacionesService.eliminarGrupoEvaluaciones(id).subscribe(
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
            this.listarPreguntas();
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

  agregarEvaluaciones(evaluaciones: any) {
    this.ref = this.dialogService.open(VerListadoDeEvaluacionesPorGrupoComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { idCurso: this.evaluaciones.id ,data: evaluaciones } 
     });

    this.ref.onClose.subscribe((data: any) => {
      this.listarPreguntas();
    });
  }

  corregirPregunta(evaluaciones: any) {

    this.ref = this.dialogService.open(CorregirPreguntasComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { idCurso: this.evaluaciones.id ,data: evaluaciones } 
     });

    this.ref.onClose.subscribe((data: any) => {
      this.listarPreguntas();
    });
  }
}