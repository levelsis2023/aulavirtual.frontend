import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-reg-evaluacion-docente',
  templateUrl: './reg-evaluacion-docente.component.html',
  styleUrls: ['./reg-evaluacion-docente.component.scss']
})
export class RegEvaluacionDocenteComponent {

  loading: boolean = false;
  ref: DynamicDialogRef | undefined;
  selectedCiclo: any;
  fechaRegistro!: Date | null;
  selectedAula: any;
  selectedEstado: any;

  horaprogramada: string | null = null;
  horaActual!: string;
  horaSeleccionada: string | null = null;

  ciclos = [
    { name: 'Oral' },
    { name: 'Escrito' },
    { name: 'Recuperación' },
    { name: 'Trabajo' },
    { name: 'Foro' }
  ];
  aulas = [
    { name: 'Escrita' },
    { name: 'Oral' },
    { name: 'Recuperación' },
    { name: 'Trabajo' },
    { name: 'Foro' }
  ];

  estados =[
    { name: 'Pendiente' },
    { name: 'En Proceso' },
    { name: 'Culminado' },
    { name: 'Desaprobado' },
  ];

  modalidad =[
    { name: 'Virtual' },
    { name: 'Presencial' },
    { name: 'Semi-Presencial' },
  ]

  capturarHora(event: any): void {
    if (event && event instanceof Date) {
      const horaFormateada: string = event.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.horaSeleccionada = horaFormateada;
      console.log('Hora seleccionadaaa:', this.horaSeleccionada);
    }
  }

  cambiarIdioma(){

  }


  onCicloChange() {
    // Lógica para cargar aulas basadas en el ciclo seleccionado
  }
  onAulaChange(){

  }

  guardarEvaluacion(){

  }
  closeModal(){
   // this.ref.close({register: false});
  }

}
