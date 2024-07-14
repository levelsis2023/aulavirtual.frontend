import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/es'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

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
  selector: 'app-reg-alumno',
  templateUrl: './reg-alumno.component.html',
  styleUrls: ['./reg-alumno.component.scss'],
  
  
  providers: [MessageService]
})
export class RegAlumnoComponent {

  tipodocu!: tipodoc[];
  tipoDocumentoSeleccionado: tipodoc | undefined;
  tipoDoc: tipodoc | undefined;
  

  fechanacimiento!: Date | null;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: esLocale,
     };
  translateService: any;

  constructor(
		private router: Router,
    private ref: DynamicDialogRef,
    private cdr: ChangeDetectorRef,
    public config: DynamicDialogConfig,   
    private parametroService: GeneralService,
    private translate: TranslateService,
    private messageService: MessageService
    
	) {}

  ngOnInit() {
    this.tipodocu = [
      { name: 'DNI', value:1, code: 'NY' },
      { name: 'PASAPORTE', value:2, code: 'RM' }
      
      
    ];
  
    if (this.translate) {
      this.translateChange('es'); // Cambia a español como ejemplo
    } else {
      console.error('TranslateService is not initialized.');
    }

    
}
cambiarIdioma() {
  this.translateService.use('es');
}
translateChange(lang: string): void {
  if (this.translate) {
    this.translate.use(lang);
  } else {
    console.error('TranslateService is not initialized.');
  }
}

onUpload(event: any) {
  this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Archivo cargado correctamente' });
}

closeModal(){
  this.ref.close({register: false});
}

}
