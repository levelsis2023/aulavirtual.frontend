import { Component, ElementRef, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { RegistraUsuarioComponent } from '../../../roles-permisos/dialog/registra-usuario/registra-usuario.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { HorarioDocenteComponent } from '../../dialog/horario-docente/horario-docente.component';
import { AsistenciaAlumnoComponent } from '../../dialog/asistencia-alumno/asistencia-alumno.component';
import { TemasDocenteComponent } from '../../dialog/temas-docente/temas-docente.component';

@Component({
  selector: 'app-cursos-docentes',
  templateUrl: './cursos-docentes.component.html',
  styleUrls: ['./cursos-docentes.component.scss']
})
export class CursosDocentesComponent {


  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  instituciones = [
    { nombre: 'Harold Jams Carrillo G', email: 'jamscg.developer@gmail.com', rol: 'Admin' },
    { nombre: 'Ceiber abel contreras T', email: 'ceiber123@gmail.com', rol: 'Docente' }
  ];
  loading: boolean = false;
  ref: DynamicDialogRef | undefined;
 

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


    navigateToNuevo() {
      this.ref = this.dialogService.open(HorarioDocenteComponent, {  
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
  this.ref = this.dialogService.open(HorarioDocenteComponent, {  
    width: '60%',
    styleClass: 'custom-dialog-header'
  });

  this.ref.onClose.subscribe((dataFromDialog) => {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  });

}

alumnos(){
  this.ref = this.dialogService.open(AsistenciaAlumnoComponent, {  
    width: '60%',
    styleClass: 'custom-dialog-header'
  });

  this.ref.onClose.subscribe((dataFromDialog) => {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  });

}

temas(){
  this.ref = this.dialogService.open(TemasDocenteComponent, {  
    width: '60%',
    styleClass: 'custom-dialog-header'
  });

  this.ref.onClose.subscribe((dataFromDialog) => {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  });

}
syllabus(){

}

foros(){

}

}
