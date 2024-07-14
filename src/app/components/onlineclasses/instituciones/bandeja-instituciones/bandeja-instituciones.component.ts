import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-bandeja-instituciones',
  templateUrl: './bandeja-instituciones.component.html',
  styleUrls: ['./bandeja-instituciones.component.scss']
})
export class BandejaInstitucionesComponent {

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

  navigateToNuevo(): void {
   // this.router.navigate(['/pl-virtual/bandeja-instituciones']);
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
