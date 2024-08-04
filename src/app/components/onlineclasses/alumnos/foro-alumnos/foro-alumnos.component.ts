import { Component } from '@angular/core';
import { ForoService } from '../../service/foro.service';
import { HelpersService } from 'src/app/helpers.service';

@Component({
  selector: 'app-foro-alumnos',
  templateUrl: './foro-alumnos.component.html',
  styleUrls: ['./foro-alumnos.component.scss']
})
export class ForoAlumnosComponent {
  foros: any[] = [];
  selectedForo: any = null;
  newResponse: string = '';
  constructor(private foroService: ForoService,
    private helperService: HelpersService
  ) { }

  ngOnInit(): void {
    const domain_id = this.helperService.getDominioId();
    this.foroService.getForos(domain_id).subscribe(data => {
      this.foros = data.map((curso: any) => {
        // Asegúrate de parsear respuestas de cadena a array
        curso.foros = curso.foros.map((foro: any) => {
          return {
            ...foro,
            respuestas: JSON.parse(foro.respuestas) // Parsear el string JSON a un array
          };
        });
        return curso;
      });
      console.log('Foros:', this.foros);
    });
  }
  selectForo(foro: any) {
    this.selectedForo = foro;
    console.log('Foro seleccionado:', foro);  
    this.newResponse = ''; // Limpiar la respuesta anterior
  }
  isExpired(endDate: string): boolean {
    const today = new Date();
    const end = new Date(endDate);
    return today > end;
  }
  submitResponse() {
    if (this.selectedForo && this.newResponse) {      
      const data = {
        id_foro: this.selectedForo.id_foro,
        respuesta: this.newResponse,
        domain_id: this.helperService.getDominioId()
      };
      console.log('Respuesta enviada:', data);
      console.log('Respuesta enviada:', this.newResponse);
      this.newResponse = '';
      this.selectedForo = null; // Cerra
    }
  }
  getDaysRemaining(endDate: string): number {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  getDaysRemainingClass(endDate: string): string {
    const days = this.getDaysRemaining(endDate);
    if (days < 0) {
      return 'days-remaining overdue';
    } else if (days <= 7) {
      return 'days-remaining due-soon';
    } else {
      return 'days-remaining on-time';
    }
  }
}
