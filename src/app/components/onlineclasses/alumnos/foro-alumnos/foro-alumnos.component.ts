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
  domain_id: any;
  selectedRespuesta: any = null;

  constructor(private foroService: ForoService,
    private helperService: HelpersService
  ) { }

  ngOnInit(): void {
    this.domain_id = this.helperService.getDominioId();
    this.getForos();
  }
  getForos() {
    this.foroService.getForos(this.domain_id,
      this.helperService.getAlumnoId(),
      this.helperService.getDocenteId()
    ).subscribe(
      (data: any[]) => {
        this.foros = data.map(foro => ({
          ...foro,
          foros: foro.foros.map((foroDetail: any) => ({
            ...foroDetail,
            respuestas: foroDetail.respuestas.map((respuesta: any) => ({
              ...respuesta,
              subrespuestas: respuesta.subrespuestas
            }))
          }))
        }));
        console.log('Foros cargados:', this.foros);
      },
      error => console.error('Error al cargar los foros', error)
    );
  }
  selectForo(foro: any, respuesta?: any, subrespuesta?: any) {
    this.selectedForo = foro;
    this.selectedRespuesta = subrespuesta || respuesta || null;
    this.newResponse = '';
  }
  isExpired(endDate: string): boolean {
    const today = new Date();
    const end = new Date(endDate);
    return today > end;
  }
  cancelResponse() {
    this.selectedForo = null;
    this.selectedRespuesta = null;
    this.newResponse = '';
  }
  submitResponse() {
    if (this.selectedForo && this.newResponse) {
      console.log(this.selectedRespuesta) 
      const data = {
        id_foro: this.selectedForo.id_foro,
        respuesta: this.newResponse,
        domain_id: this.helperService.getDominioId(),
        alumno_id: this.helperService.getAlumnoId(),
        docente_id: this.helperService.getDocenteId(),
        id_respuesta: this.selectedRespuesta ? this.selectedRespuesta.id : null
      };
      this.foroService.sendResponse(data).subscribe(response => {
        console.log('Respuesta enviada:', response);
        this.helperService.showSuccessMessage('Respuesta enviada correctamente');
        //refrescar foros
        this.getForos();

      });
      this.newResponse = '';
      this.selectedForo = null; // Cerra
    }
  }
  getDaysRemaining(endDate: string): string {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const remainingTime = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (remainingTime < 0) {
      return 'Vencido';
    }
    return remainingTime.toString() + ' días';
  }

  getDaysRemainingClass(endDate: string): string {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const remainingTime = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (remainingTime < 0) {
      return 'days-remaining overdue';
    } else if (remainingTime <= 7) {
      return 'days-remaining due-soon';
    } else {
      return 'days-remaining on-time';
    }
  }
}
