import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import { Parametro } from '../../../interface/general';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-carrerastecnicas',
  templateUrl: './reg-carrerastecnicas.component.html',
  styleUrls: ['./reg-carrerastecnicas.component.scss']
})
export class RegCarrerastecnicasComponent {

  loading: boolean = false;
  parametroDatos: Parametro = new Parametro();
  parametro: Parametro = new Parametro;
  mostrarCursos = false;

  

  constructor(
    private ref: DynamicDialogRef,
    private cdr: ChangeDetectorRef,
    public config: DynamicDialogConfig,   
    private parametroService: GeneralService,
    private router: Router,

) {
    
}



  guardarParametro(){

  }

  updateParametros(){

  }

  closeModal(){
    this.ref.close({register: false});

  }

  verCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  // this.router.navigate(['/pl-virtual/registro-instituciones']);
  }

  capturarCursosSeleccionados(cursos: any[]) {
    console.log('Cursos seleccionados:', cursos);
    // Aquí puedes manejar los cursos seleccionados como desees
  }

}
