import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-select-cursos',
  templateUrl: './table-select-cursos.component.html',
  styleUrls: ['./table-select-cursos.component.scss']
})
export class TableSelectCursosComponent {

  cursos = [
    { id: 1, nombre: 'Curso 1' },
    { id: 2, nombre: 'Curso 2' },
    { id: 3, nombre: 'Curso 3' },
    // Agrega más cursos según sea necesario
  ];

  selectedCursos: any[] = [];
  

  @Output() cursosSeleccionados = new EventEmitter<any[]>();


  seleccionarCursos() {
    this.cursosSeleccionados.emit(this.selectedCursos);
  }

}
