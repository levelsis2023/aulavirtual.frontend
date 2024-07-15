import { Component } from '@angular/core';

interface cursos {
  name: string;
  tema?: string; // Añadir campo tema opcional
}

@Component({
  selector: 'app-temas-docente',
  templateUrl: './temas-docente.component.html',
  styleUrls: ['./temas-docente.component.scss']
})
export class TemasDocenteComponent {


  selectedCurso: any;
  today = new Date();
  currentDay: string = '';
  currentDate: string = '';
  currentTime: string = '';

  cursos = [
    { name: 'Curso 1' },
    { name: 'Curso 2' },
    { name: 'Curso 3' }
  ];

  selectedCursos: cursos[] = [];

  constructor() { }

  ngOnInit(): void {
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

  onCursosChange() {
    // Lógica para manejar cambios en la selección de cursos, si es necesario
  }

  guardartemas(){

  }
  closeModal(){

  }

}
