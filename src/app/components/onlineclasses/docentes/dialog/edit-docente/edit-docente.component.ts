import { ChangeDetectorRef, Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { MessageService } from 'primeng/api';
import esLocale from '@fullcalendar/core/locales/es'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import { TranslateService } from '@ngx-translate/core';
import { DocenteService } from '../../../service/docentes.service';
import Swal from 'sweetalert2';

interface tipodoc {
  name: string;
  value: number;
  code: string;
}
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

interface tipoGenero {
  name: string;
  value: number;
}

@Component({
  selector: 'app-edit-docente',
  templateUrl: './edit-docente.component.html',
  styleUrls: ['./edit-docente.component.scss'],
  providers:[MessageService]
})


export class EditDocenteComponent {
  tipodocu!: tipodoc[];
  tipoDocumentoSeleccionado: tipodoc | undefined;
  tipoDoc: tipodoc | undefined;
  tipoGenero!: tipoGenero[];
  tipoGeneroSeleccionado: tipoGenero | undefined;

  fechanacimiento!: Date | null;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: esLocale,
     };
  translateService: any;

  public selectedFile: File | null = null;
  public base64: string | null = null;
  
  public DocenteForm: FormGroup;
  constructor(
		private router: Router,
    private ref: DynamicDialogRef,
    private cdr: ChangeDetectorRef,
    public config: DynamicDialogConfig,   
    private parametroService: GeneralService,
    private translate: TranslateService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private docenteService: DocenteService
    
	) {
    this.DocenteForm = this.formBuilder.group({
      id: [0],
      codigo: ['',Validators.required],
      nombres: ['',Validators.required],
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
      celular: ['', Validators.required],
      profesion: ['', Validators.required],
      edad: [0, Validators.required],
      genero: ['', Validators.required],
      tipo_documento: ['', Validators.required],
      doc_identidad: ['', Validators.required],
      vinculo_laboral: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      // foto: ['', Validators.required]
      roles: ['']
    });
  }

  ngOnInit() {
    this.tipodocu = [
      { name: 'DNI', value:1, code: 'NY' },
      { name: 'PASAPORTE', value:2, code: 'RM' }
      
    ];

    this.tipoGenero = [
      { name: 'Masculino', value:1 },
      { name: 'Femenino', value:2}
    ]
    
    const tipoDoc = this.tipodocu.find(item => item.name == this.config.data.tipo_documento);
    if(tipoDoc){
      this.tipoDocumentoSeleccionado = {code: tipoDoc.code, name: tipoDoc.name, value: tipoDoc.value}
    }

    const tipoGenero = this.tipoGenero.find(item => item.name == this.config.data.genero);
    if(tipoGenero){
      this.tipoGeneroSeleccionado = {name: tipoGenero.name, value: tipoGenero.value}
    }

    // console.log(this.config.data.foto)
    this.base64 = this.config.data.foto;
    this.DocenteForm.patchValue({
      id: this.config.data.id,
      codigo: this.config.data.codigo,
      nombres: this.config.data.nombres,
      usuario: this.config.data.usuario,
      clave: this.config.data.clave,
      celular: this.config.data.celular,
      profesion: this.config.data.profesion,
      tipo_documento: this.config.data.tipo_documento,
      doc_identidad: this.config.data.doc_identidad,
      vinculo_laboral: this.config.data.vinculo_laboral,
      fecha_nacimiento: this.config.data.fecha_nacimiento,
      edad: this.config.data.edad,
      genero: this.config.data.genero,
      // foto: this.config.data.foto,
      roles: this.config.data.roles
    })
    console.log(this.DocenteForm.get('nombres')?.value);

  
    if (this.translate) {
      this.translateChange('es'); // Cambia a español como ejemplo
    } else {
      console.error('TranslateService is not initialized.');
    }

    
}

  actualizarDocente(){
    console.log(this.DocenteForm.value);
    this.docenteService.actualizarDocentes({
      id: this.DocenteForm.get('id')?.value,
      codigo: this.DocenteForm.get('codigo')?.value,
      nombres: this.DocenteForm.get('nombres')?.value,
      usuario: this.DocenteForm.get('usuario')?.value,
      clave: this.DocenteForm.get('clave')?.value,
      celular: this.DocenteForm.get('celular')?.value,
      profesion: this.DocenteForm.get('profesion')?.value,
      vinculo_laboral: this.DocenteForm.get('vinculo_laboral')?.value,
      tipo_documento: this.DocenteForm.get('tipo_documento')?.value,
      doc_identidad: this.DocenteForm.get('doc_identidad')?.value,
      fecha_nacimiento: this.DocenteForm.get('fecha_nacimiento')?.value,
      edad: this.DocenteForm.get('edad')?.value,
      genero: this.DocenteForm.get('genero')?.value,
      foto: this.base64,
      roles: 'seguridad,aula_virtual' //this.DocenteForm.get('roles')?.value
    }).subscribe(
      (res:any)=>{
        console.log(res)
        this.closeModal();

      },(error:any)=>{
        console.log(error)
      });
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
    this.ref.close({ mensaje: 'cerrando'});
  }


  onFileChange(event: any) {
    console.log(event)
    const file = event.files[0];
      if (file) {
        console.log('entro')
        this.selectedFile = file;
        const reader = new FileReader();
        console.log(this.selectedFile)
        reader.onload = () => {
          this.base64 = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
  }

}
