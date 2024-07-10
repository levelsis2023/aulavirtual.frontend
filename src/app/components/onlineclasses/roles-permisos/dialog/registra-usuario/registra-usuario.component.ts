import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import esLocale from '@fullcalendar/core/locales/es'
import Swal from 'sweetalert2';	
import { DynamicDialogRef } from 'primeng/dynamicdialog'


interface carreras {
  name: string;
  value: number;
  code: string;
}

interface Cantciclos {
  name: string;
  value: number;
  code: string;
}

interface modellistareaformativa {
  name: string;
  value: number;
  code: string;
}

interface modellistadocente {
  name: string;
  value: number;
  code: string;
}

@Component({
  selector: 'app-registra-usuario',
  templateUrl: './registra-usuario.component.html',
  styleUrls: ['./registra-usuario.component.scss'],

})
export class RegistraUsuarioComponent {
  
  listcarrera!: carreras[];
  seleccarrera: carreras | undefined;
  
  listciclos!: Cantciclos[];
  selecciclos: Cantciclos  | undefined;

  listareaformativa!: modellistareaformativa[];
  selectunidadfromativa: modellistareaformativa | undefined;

  lsitadocente!: modellistadocente[];
  selectdocente:modellistadocente | undefined;
  
  contsylabus: string ='';

  fechanacimiento!: Date | null;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: esLocale,
     };
 

  dialogVisible: boolean = false; 
  visible: boolean = false;

	constructor(private layoutService: LayoutService,
		private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService,
    public ref: DynamicDialogRef,
    private translateService: TranslateService
	) {}

ngOnInit(){

	this.listciclos = [
		{ name: 'Administrador', value:1, code: 'NY' },
		{ name: 'Alumno', value:2, code: 'RM' },
    { name: 'Docente', value:3, code: 'NY' },
	
	]
  this.listcarrera = [
		{ name: 'DNI', value:1, code: 'NY' },
		{ name: 'PASAPORTE', value:2, code: 'RM' }
    	
	];

  this.listareaformativa = [
		{ name: 'Área de formación 1', value:1, code: 'NY' },
		{ name: 'Área de formación 2', value:2, code: 'RM' },
    { name: 'Área de formación 3', value:2, code: 'RM' } 
		
	];
  this.lsitadocente = [
		{ name: 'Docente 1', value:1, code: 'NY' },
		{ name: 'Docente 2', value:2, code: 'RM' },
    { name: 'Docente 3', value:2, code: 'RM' } 
		
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

   onDropdownChangetipoDni(event: any): void {
    // Lógica para manejar el cambio en el dropdown
    console.log('Dropdown value changed:', event);
    
  }

  Guardaruser() {
    this.ref.close();
      Swal.fire({
        title: '¡Éxito!',
        text: 'Los Datos se registraron correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
       
      });
    }
  
closeDialog() {
      this.visible = false;
  }
}
