import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import esLocale from '@fullcalendar/core/locales/es'

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
  selector: 'app-registro-curso-docente',
  templateUrl: './registro-curso-docente.component.html',
  styleUrls: ['./registro-curso-docente.component.scss']
})
export class RegistroCursoDocenteComponent {

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
  translateService: any;

	constructor(private layoutService: LayoutService,
		private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService
	) {}



	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

ngOnInit(){

	this.listciclos = [
		{ name: 'I', value:1, code: 'NY' },
		{ name: 'II', value:2, code: 'RM' },
    { name: 'III', value:3, code: 'NY' },
		{ name: 'IV', value:4, code: 'RM' },
		{ name: 'V', value:5, code: 'NY' },
		{ name: 'VI', value:6, code: 'RM' }		
	]
  this.listcarrera = [
		{ name: 'Administración', value:1, code: 'NY' },
		{ name: 'Computación e Informatica', value:2, code: 'RM' },
    { name: 'Marqueting', value:3, code: 'NY' },
		{ name: 'Enfermeria', value:4, code: 'RM' },
		{ name: 'Agropecuario', value:5, code: 'NY' }		
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

  /* translateChange(lang: string) {
    this.translateService.use(lang)
    this.translateService.get('primeng').subscribe((res: any) => this.primengConfig.setTranslation(res))
  }*/
  
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

}
