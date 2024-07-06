import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import esLocale from '@fullcalendar/core/locales/es'
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';


interface tipodoc {
  name: string;
  value: number;
  code: string;
}

@Component({
  selector: 'app-registrar-alumnos',
  templateUrl: './registrar-alumnos.component.html',
  styleUrls: ['./registrar-alumnos.component.scss']
})



export class RegistrarAlumnosComponent {


  tipodocu!: tipodoc[];
  tipoDocumentoSeleccionado: tipodoc | undefined;
  tipoDoc: tipodoc | undefined;

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
