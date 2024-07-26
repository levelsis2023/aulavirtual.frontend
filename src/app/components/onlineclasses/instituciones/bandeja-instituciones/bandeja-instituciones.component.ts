import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';

import { RegistroInstitucionesService } from '@services/instituciones/registro-instituciones.service';

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
    private registroInstitucionesServic: RegistroInstitucionesService
  ) { }

  ngOnInit(): void {
    console.log("Datos-extraidos-de-bandeja-colegiado-PARA MIEMBRO");
    this.getInstituciones();
  }

  getInstituciones(): void {
    this.registroInstitucionesServic.listar().subscribe(data => {
      this.instituciones = data;
      this.loading = false;
      console.log("data", this.instituciones);
    });
  }

  editInstitucion(id: number): void {
    this.router.navigate([`/pl-virtual/registro-instituciones/${id}`]); // Asegúrate de configurar esta ruta en tu aplicación
  }

  deleteInstitucion(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta institución?')) {
      this.registroInstitucionesServic.delete(id).subscribe(() => {
        this.getInstituciones(); // Recargar la lista de instituciones
      });
    }
  }

  navigateToNuevo(): void {
    this.router.navigate(['/pl-virtual/registro-instituciones']);
  }

  onGlobalFilter(table: any, event: Event): void {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onRowSelect(event: any) {
    
    console.log("Organo-colegaido-sect");
  }

  onRowUnselect(event: any) {
    
    
  }

}
