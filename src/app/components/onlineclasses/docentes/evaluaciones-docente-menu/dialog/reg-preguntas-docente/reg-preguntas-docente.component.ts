import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-preguntas-docente',
  templateUrl: './reg-preguntas-docente.component.html',
  styleUrls: ['./reg-preguntas-docente.component.scss']
})
export class RegPreguntasDocenteComponent {

  selectedEstado: any;
  estados =[
    { name: 'Pendiente' },
    { name: 'En Proceso' },
    { name: 'Culminado' },
    { name: 'Desaprobado' },
  ];


  guardarpreguntas(){

  }
  closeModal(){

  }
  onAulaChange(){
    
  }

}
