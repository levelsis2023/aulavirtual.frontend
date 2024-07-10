import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { RegistroCursoDocenteComponent } from '../dialog/registro-curso-docente/registro-curso-docente.component';

@Component({
  selector: 'app-bandeja-curso-docente',
  templateUrl: './bandeja-curso-docente.component.html',
  styleUrls: ['./bandeja-curso-docente.component.scss']
})
export class BandejaCursoDocenteComponent {

  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  instituciones: any[] = [];
  loading: boolean = false;


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

  editarcursoDocente(){

  }

  navigateToNuevo(){
    const ref = this.dialogService.open(RegistroCursoDocenteComponent, {
      //header: 'Registrar Curso al Docente',
      width: '60%',
      styleClass: 'custom-dialog-header',
     

    });


   // this.router.navigate(['/pl-virtual/registro-instituciones']);
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

}
