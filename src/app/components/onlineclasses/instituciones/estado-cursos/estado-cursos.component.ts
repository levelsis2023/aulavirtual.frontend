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
  selector: 'app-estado-cursos',
  templateUrl: './estado-cursos.component.html',
  styleUrls: ['./estado-cursos.component.scss']
})
export class EstadoCursosComponent {

  listareaformativa!: modellistareaformativa[];
  tipoDocumentoSeleccionado: modellistareaformativa | undefined;
  tipoDoc: modellistareaformativa | undefined;
  valuecantciclos: Cantciclos | undefined;
  cantciclos!: Cantciclos[];

  backgroundColor: string = '';

   

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
		{ name: 'Pendiente', value:1, code: 'NY' },
		{ name: 'En proceso', value:2, code: 'RM' },
    { name: 'Culminado', value:3, code: 'NY' },
		{ name: 'Desaprobado', value:4, code: 'RM' },
		
		
	];
}


onDropdownChange(value: Cantciclos): void {
  switch (value.value) {
    case 1:
      this.backgroundColor = '#FFA500'; // Naranja
      break;
    case 2:
      this.backgroundColor = '#ffff00'; // Amarillo
      break;
    case 3:
      this.backgroundColor = '#00ff00'; // Verde
      break;
    case 4:
      this.backgroundColor = '#ff0000'; // Gris
      break;
    default:
      this.backgroundColor = '';
  }
}

}
