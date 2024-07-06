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
  selector: 'app-unidades-didacticas',
  templateUrl: './unidades-didacticas.component.html',
  styleUrls: ['./unidades-didacticas.component.scss']
})
export class UnidadesDidacticasComponent {

  listareaformativa!: modellistareaformativa[];
  tipoDocumentoSeleccionado: modellistareaformativa | undefined;


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
		{ name: 'Unidades Formativa 1', value:1, code: 'NY' },
		{ name: 'Unidades Formativa 2', value:2, code: 'RM' },
    { name: 'Unidades Formativa 3', value:2, code: 'RM' } 
		
	];
}


}
