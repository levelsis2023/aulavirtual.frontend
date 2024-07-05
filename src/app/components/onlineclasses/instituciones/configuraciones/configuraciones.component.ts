import { Component } from '@angular/core';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.scss']
})
export class ConfiguracionesComponent {

  horaprogramada: string | null = null;
  horaActual!: string;
  horaSeleccionada: string | null = null;






  capturarHora(event: any): void {
    if (event && event instanceof Date) {
      const horaFormateada: string = event.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.horaSeleccionada = horaFormateada;
      console.log('Hora seleccionadaaa:', this.horaSeleccionada);
    }
  }

}
