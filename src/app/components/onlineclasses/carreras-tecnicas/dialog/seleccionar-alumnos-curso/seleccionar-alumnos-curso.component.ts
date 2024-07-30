import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';

@Component({
  selector: 'app-seleccionar-alumnos-curso',
  templateUrl: './seleccionar-alumnos-curso.component.html',
  styleUrls: ['./seleccionar-alumnos-curso.component.scss']
})
export class SeleccionarAlumnosCursoComponent {
  loading: boolean = false;
  cursoAlumnoList: any[] = [];
  curso: any;
  cursoNombre: string = '';
  domainId: any;
  constructor(
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private alumnoService: GeneralService
  ) {
    this.curso = this.config.data.cursoId;
    this.domainId = this.config.data.domainId;
    this.cursoNombre = this.config.data.cursoNombre;
    this.getAlumnosCurso(this.domainId??1, this.curso);
  }
  getAlumnosCurso(domainId: any, cursoId: any) {
    console.log("domainId", domainId);
    this.loading = true;
    this.alumnoService.getAlumnosCurso(
      domainId,
      cursoId
    ).subscribe((data: any) => {
      this.cursoAlumnoList = data;
      this.loading = false;
    });
  }
  onSelectAlumno(event:any,alumno: any) {
    const data={
      domain_id: this.domainId??1,
      curso_id: this.curso,
      alumno_id: alumno.id,
      is_participant: event.target.checked,
    }
    this.alumnoService.updateAlumnoCurso(data).subscribe((data: any) => {
      this.getAlumnosCurso(this.domainId, this.curso);
    });
  }
}
