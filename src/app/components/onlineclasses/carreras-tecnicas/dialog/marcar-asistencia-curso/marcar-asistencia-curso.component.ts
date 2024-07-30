import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AsistenciaService } from '../../../service/asistencia.service';

@Component({
  selector: 'app-marcar-asistencia-curso',
  templateUrl: './marcar-asistencia-curso.component.html',
  styleUrls: ['./marcar-asistencia-curso.component.scss']
})
export class MarcarAsistenciaCursoComponent {
  loading: boolean = false;
  asistenciaCursoList: any[] = [];
  curso: any;
  domainId: any;
  docente_id: any;
  cursoNombre: any;
  fechas: string[] = [];
  selectedFecha: string = ''; 
  initialLoad: boolean = true; // Variable para controlar la carga inicial

  constructor(
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private asistenciaService: AsistenciaService
  ) {
    this.curso = this.config.data.cursoId;
    this.domainId = this.config.data.domainId;
    this.docente_id = this.config.data.docente_id;
    this.cursoNombre = this.config.data.cursoNombre;
    this.fechas = [];

    this.selectedFecha = '2021-09-01';

    // Primera llamada para obtener las fechas
    this.getAsistenciaCurso(this.domainId ?? 1, this.curso, this.selectedFecha, true);
  }

  getAsistenciaCurso(domainId: any, cursoId: any, fecha: any, isInitialLoad: boolean = false) {
    console.log("domainId", domainId);
    this.loading = true;
    const data = {
      domain_id: domainId,
      curso_id: cursoId,
      fecha: fecha
    };
    this.asistenciaService.getAsistenciaCurso(data).subscribe((data: any) => {
      const fechaInicio = new Date(data.horarios[0].fecha_inicio);
      const fechaFin = new Date(data.horarios[0].fecha_fin);
      const classDays: any[] = [];
      data.horarios.forEach((element: any) => {
        if (!classDays.includes(element.day_id)) {
          classDays.push(element.day_id);
        }
      });
      const dates = this.generateDatesWithDaysAndRange(fechaInicio, fechaFin, classDays);

      this.fechas = dates;

      // Si es la carga inicial, no llena la tabla
      if (isInitialLoad) {
        if (this.fechas.length > 0) {
          this.selectedFecha = this.fechas[0];
          this.getAsistenciaCurso(this.domainId ?? 1, this.curso, this.selectedFecha);
        }
      } else {
        this.loading = false;
        this.asistenciaCursoList = data.participantes;
      }
    });
  }

  onCheckAsistencia(event: any, asistencia: any) {
    const data = {
      domain_id: this.domainId ?? 1,
      curso_id: this.curso,
      alumno_id: asistencia.alumno_id,
      fecha: this.selectedFecha,
      asistio: event.target.checked,
      docente_id: this.docente_id
    }
    console.log("data", data);
    this.asistenciaService.updateAsistenciaCurso(data).subscribe(() => {
    });
  }

  generateDatesWithDaysAndRange(fechaInicio: Date, fechaFin: Date, days: any[]) {
    const dates = [];
    const currentDate = new Date(fechaInicio);
    while (currentDate <= fechaFin) {
      if (days.includes(currentDate.getDay())) {
        dates.push(currentDate.toISOString().split('T')[0]);
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  onFilterDateChange(event: any) {
    this.selectedFecha = event.target.value; // Actualiza la fecha seleccionada

    this.getAsistenciaCurso(this.domainId ?? 1, this.curso, this.selectedFecha);
  }
}
