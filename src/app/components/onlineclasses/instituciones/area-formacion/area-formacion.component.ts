import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


interface listcarreras {
  name: string;
  value: number;
  code: string;
}

interface Cantciclos {
  name: string;
  value: number;
  code: string;
}

@Component({
  selector: 'app-area-formacion',
  templateUrl: './area-formacion.component.html',
  styleUrls: ['./area-formacion.component.scss']
})
export class AreaFormacionComponent {

  listcarreras!: listcarreras[];
  tipoDocumentoSeleccionado: listcarreras | undefined;
  tipoDoc: listcarreras | undefined;
  listciclos!: Cantciclos[];
  cantciclos!: Cantciclos[];
  valuecantciclos: Cantciclos | undefined;

  tipoTemaSeleccionado: Cantciclos | null = null

  txtdescripcion!: string;
  constructor(private layoutService: LayoutService,
		private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService
	) {}



	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

ngOnInit(){

	this.listcarreras = [
    { name: 'Administración', value:1, code: 'NY' },
		{ name: 'Computación e Informatica', value:2, code: 'RM' },
    { name: 'Marqueting', value:3, code: 'NY' },
		{ name: 'Enfermeria', value:4, code: 'RM' },
		{ name: 'Agropecuario', value:5, code: 'NY' }	
	];
  this.cantciclos = [
		{ name: 'I', value:1, code: 'NY' },
		{ name: 'II', value:2, code: 'RM' },
    { name: 'III', value:3, code: 'NY' },
		{ name: 'IV', value:4, code: 'RM' },
		{ name: 'V', value:5, code: 'NY' },
		{ name: 'VI', value:6, code: 'RM' }
		
	]
}

}
