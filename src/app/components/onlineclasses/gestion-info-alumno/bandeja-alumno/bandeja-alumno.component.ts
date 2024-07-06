import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-bandeja-alumno',
  templateUrl: './bandeja-alumno.component.html',
  styleUrls: ['./bandeja-alumno.component.scss']
})
export class BandejaAlumnoComponent {


  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  instituciones: any[] = [];
  loading: boolean = false;


  constructor(
    private router: Router,
 
  
  ) { }

  ngOnInit() {
    
    console.log("Datos-extraidos-de-bandeja-colegiado-PARA MIEMBRO");
    this.cargaInicial();
   

    
  }

  cargaInicial(): void {
   
  }

  navigateToNuevo(): void {
    this.router.navigate(['/pl-virtual/registro-alumno']);
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
