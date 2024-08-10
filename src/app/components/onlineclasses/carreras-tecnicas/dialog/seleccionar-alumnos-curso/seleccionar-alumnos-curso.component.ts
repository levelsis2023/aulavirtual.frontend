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
    originalCursoAlumnoList: any[] = [];
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
        console.log('alumnos', data);
      this.cursoAlumnoList = data;
      this.originalCursoAlumnoList = [...data];
      this.loading = false;
    });
  }
  onSelectAlumno(event:any,alumno: any) {
      console.log('alumno cambio seleccionado');
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

    onSelectAll(event: any): void{
        const checked = (event.target as HTMLInputElement).checked;
        this.cursoAlumnoList[0].is_participant = checked ? 1 : 0;
    }

    onGlobalFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
        console.log("Filtro Global", filterValue);
        if (!filterValue) {
            this.cursoAlumnoList = [...this.originalCursoAlumnoList];
            return;
        }

        this.cursoAlumnoList = this.originalCursoAlumnoList.filter(alumno =>
            (alumno.codigo && alumno.codigo.toLowerCase().includes(filterValue)) ||
            (alumno.nombres && alumno.nombres.toLowerCase().includes(filterValue)) ||
            (alumno.email && alumno.email.toLowerCase().includes(filterValue))
        );
    }
}
