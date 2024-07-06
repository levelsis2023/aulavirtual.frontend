import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

interface tipodoc {
  name: string;
  value: number;
  code: string;
}


@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.scss']
})
export class CiclosComponent {



  cantciclos!: tipodoc[];
  tipoDocumentoSeleccionado: tipodoc | undefined;
  tipoDoc: tipodoc | undefined;


  nrociclos: number | null = null;

  
  constructor(private layoutService: LayoutService,
		private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService
	) {}



	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

ngOnInit(){

	this.cantciclos = [
		{ name: 'Administración', value:1, code: 'NY' },
		{ name: 'Computación e Informatica', value:2, code: 'RM' },
    { name: 'Marqueting', value:3, code: 'NY' },
		{ name: 'Enfermeria', value:4, code: 'RM' },
		{ name: 'Agropecuario', value:5, code: 'NY' }
		
		
	];
}



}
