import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reg-documentos-alumno',
  templateUrl: './reg-documentos-alumno.component.html',
  styleUrls: ['./reg-documentos-alumno.component.scss'],
  providers: [MessageService]
})
export class RegDocumentosAlumnoComponent {




  constructor(
		private router: Router,
    private ref: DynamicDialogRef,
    private cdr: ChangeDetectorRef,
    public config: DynamicDialogConfig,   
    private parametroService: GeneralService,
    private translate: TranslateService,
    private messageService: MessageService
    
	) {}

  onUpload(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Archivo cargado correctamente' });
  }


  closeModal(){
    this.ref.close({register: false});
  }

}
