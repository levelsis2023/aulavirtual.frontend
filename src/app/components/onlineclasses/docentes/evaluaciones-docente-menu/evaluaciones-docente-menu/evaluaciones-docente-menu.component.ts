import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { RegEvaluacionDocenteComponent } from '../dialog/reg-evaluacion-docente/reg-evaluacion-docente.component';
import { BandejaPreguntasDocenteComponent } from '../bandeja-preguntas-docente/bandeja-preguntas-docente.component';

@Component({
  selector: 'app-evaluaciones-docente-menu',
  templateUrl: './evaluaciones-docente-menu.component.html',
  styleUrls: ['./evaluaciones-docente-menu.component.scss'],
  providers: [DialogService]
})
export class EvaluacionesDocenteMenuComponent {
  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  instituciones = [
    {codigo:'154748100',nombrecurso:'Sistemas', nombre: 'Harold Jams Carrillo G',tipoeval:'Escrito', email: 'jamscg.developer@gmail.com', valor: '50' },
    {codigo:'154748100',nombrecurso:'Maniquiuri', nombre: 'Ceiber abel contreras T', tipoeval:'Oral', email: 'ceiber123@gmail.com', valor: '35' }
  ];
  loading: boolean = false;
  ref: DynamicDialogRef | undefined;
 
  showPreguntas = false;
  constructor(
    private router: Router,
    private dialogService: DialogService,
    
  
  ) { }

  ngOnInit(): void {
    
    console.log("Datos-extraidos-de-bandeja-colegiado-PARA MIEMBRO");
    this.cargaInicial();
   

    
  }

  cargaInicial(): void {
   
  }

  showQuestions() {
    this.showPreguntas = true;
  }

  closeQuestions() {
    this.showPreguntas = false;
  }

    navigateToNuevo() {
      this.ref = this.dialogService.open(RegEvaluacionDocenteComponent, {  
        width: '60%',
        styleClass: 'custom-dialog-header'
      });
  
      this.ref.onClose.subscribe((dataFromDialog) => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
      });
    }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal(
      (event.target as HTMLInputElement).value,
      'contains'
    )
  }

  onRowSelect(event: any) {
    
    console.log("Organo-colegaido-sect");
  }

  onRowUnselect(event: any) {
    
    
  }


vertodos(){

  }
horarios(){
 /* this.ref = this.dialogService.open(HorarioDocenteComponent, {  
    width: '60%',
    styleClass: 'custom-dialog-header'
  });

  this.ref.onClose.subscribe((dataFromDialog) => {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  });*/

}




syllabus(){

}

foros(){

}

}
