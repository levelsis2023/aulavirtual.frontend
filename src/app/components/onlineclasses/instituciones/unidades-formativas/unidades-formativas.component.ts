import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


interface modellistareaformativa {
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
  selector: 'app-unidades-formativas',
  templateUrl: './unidades-formativas.component.html',
  styleUrls: ['./unidades-formativas.component.scss']
})
export class UnidadesFormativasComponent {


  listareaformativa!: modellistareaformativa[];
  selectunidadfromativa: modellistareaformativa | undefined;


  tipoDoc: modellistareaformativa | undefined;

  valuecantciclos: Cantciclos | undefined;

  cantciclos!: Cantciclos[];

  constructor(private layoutService: LayoutService,
		private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService
	) {}



	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

ngOnInit(){

  this.listareaformativa = [
		{ name: 'Área de formación 1', value:1, code: 'NY' },
		{ name: 'Área de formación 2', value:2, code: 'RM' },
    { name: 'Área de formación 3', value:2, code: 'RM' } 
		
	];
  this.cantciclos = [
		{ name: 'Administración', value:1, code: 'NY' },
		{ name: 'Computación e Informatica', value:2, code: 'RM' },
    { name: 'Marqueting', value:3, code: 'NY' },
		{ name: 'Enfermeria', value:4, code: 'RM' },
		{ name: 'Agropecuario', value:5, code: 'NY' }
		
	];
}

}
