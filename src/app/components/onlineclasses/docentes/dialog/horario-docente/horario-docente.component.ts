import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';


interface tipodoc {
  name: string;
  value: number;
  code: string;
}
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-horario-docente',
  templateUrl: './horario-docente.component.html',
  styleUrls: ['./horario-docente.component.scss']
})
export class HorarioDocenteComponent {

  tipodocu!: tipodoc[];
  tipoDocumentoSeleccionado: tipodoc | undefined;
  tipoDoc: tipodoc | undefined;

  horaprogramada: string | null = null;
  horaActual!: string;
  horaSeleccionada: string | null = null;

  constructor(
		private router: Router,
    private ref: DynamicDialogRef,
    private cdr: ChangeDetectorRef,
    public config: DynamicDialogConfig,   
    private parametroService: GeneralService,
    private translate: TranslateService,
   
    
	) {}

  ngOnInit() {
    this.tipodocu = [
      { name: 'DNI', value:1, code: 'NY' },
      { name: 'PASAPORTE', value:2, code: 'RM' }
      
      
    ];
  
    

    
}

carrerasTecnicas = [
  { name: 'Carrera 1' },
  { name: 'Carrera 2' },
  { name: 'Carrera 3' }
];

cursos = [
  { name: 'Curso 1' },
  { name: 'Curso 2' },
  { name: 'Curso 3' }
];

dias = [
  { name: 'Lunes' },
  { name: 'Martes' },
  { name: 'Miércoles' },
  { name: 'Jueves' },
  { name: 'Viernes' }
];

selectedCarrera: any;
selectedCurso: any;
selectedDias: any[] = [];
horariosProgramados: { [key: string]: Date } = {};

onDiasChange() {
  // Clear horariosProgramados for unselected days
  const selectedDiaNames = this.selectedDias.map(dia => dia.name);
  Object.keys(this.horariosProgramados).forEach(key => {
    if (!selectedDiaNames.includes(key)) {
      delete this.horariosProgramados[key];
    }
  });
}

capturarHora(event: any) {
  // Implementar lógica para capturar la hora si es necesario
}

guardarHorario() {
  // Implementar lógica para guardar el horario
}



closeModal(){
  this.ref.close({register: false});
}

guardarhorario(){

}

}
