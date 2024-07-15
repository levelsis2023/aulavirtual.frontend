import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';

interface Alumno {
  codigo: string;
  nombresCompletos: string;
  nroDocumento: string;
  asistio: boolean;
  noAsistio: boolean;
}

@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.component.html',
  styleUrls: ['./asistencia-alumno.component.scss']
})
export class AsistenciaAlumnoComponent implements OnInit {

  loading: boolean = false;
  ref: DynamicDialogRef | undefined;
  today = new Date();
  currentDay: string = '';
  currentDate: string = '';
  currentTime: string = '';

  cursos = [
    { name: 'Curso 1' },
    { name: 'Curso 2' },
    { name: 'Curso 3' }
  ];

  ciclos = [
    { name: 'Ciclo 1' },
    { name: 'Ciclo 2' },
    { name: 'Ciclo 3' },
    { name: 'Ciclo 4' },
    { name: 'Ciclo 5' },
    { name: 'Ciclo 6' }
  ];

  aulas = [
    { name: 'Aula 1' },
    { name: 'Aula 2' },
    { name: 'Aula 3' }
  ];

  selectedCurso: any;
  selectedCiclo: any;
  selectedAula: any;
  alumnos: Alumno[] = [];
 

  constructor() { }

  ngOnInit(): void {
    this.alumnos = [
      { codigo: '123', nombresCompletos: 'Ever Garay', nroDocumento: '41478789', asistio: false, noAsistio: false },
      { codigo: '123', nombresCompletos: 'Ceiber Garay', nroDocumento: '014574148', asistio: false, noAsistio: false },
      { codigo: '123', nombresCompletos: 'Juan Pérez', nroDocumento: '02132562', asistio: false, noAsistio: false },
      { codigo: '124', nombresCompletos: 'María López', nroDocumento: '70142514', asistio: false, noAsistio: false },
      { codigo: '125', nombresCompletos: 'Pedro Gómez', nroDocumento: '71458789', asistio: false, noAsistio: false }
    ];

    this.updateDateTime();
  }

  updateDateTime() {
    const now = new Date();
    this.currentDay = now.toLocaleDateString('es-ES', { weekday: 'long' });
    this.currentDate = now.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    this.currentTime = now.toLocaleTimeString('es-ES');
    setInterval(() => {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString('es-ES');
    }, 1000);
  }

  onCursoChange() {
    // Lógica para cargar ciclos basados en el curso seleccionado
  }

  onCicloChange() {
    // Lógica para cargar aulas basadas en el ciclo seleccionado
  }

  onAulaChange() {
    // Lógica para cargar alumnos basados en el aula seleccionada
  }

  onGlobalFilter(dt: any, event: Event) {
    dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  updateAttendance(alumno: Alumno, asistio: boolean) {
    if (asistio) {
      alumno.noAsistio = !alumno.asistio;
    } else {
      alumno.asistio = !alumno.noAsistio;
    }
  }



 
  





  guardarAsistencia(){

  }

  closeModal(){

  }

}
