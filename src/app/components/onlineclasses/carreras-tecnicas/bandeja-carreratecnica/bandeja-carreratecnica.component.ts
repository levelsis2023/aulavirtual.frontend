import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Miembro, Parametro } from '../../interface/general';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../service/general.service';
import { Router } from '@angular/router';
import { RegCarrerastecnicasComponent } from '../dialog/reg-carrerastecnicas/reg-carrerastecnicas.component';
import { RegCursosComponent } from '../../cursos/dialog/reg-cursos/reg-cursos.component';

@Component({
  selector: 'app-bandeja-carreratecnica',
  templateUrl: './bandeja-carreratecnica.component.html',
  styleUrls: ['./bandeja-carreratecnica.component.scss']
})
export class BandejaCarreratecnicaComponent {

  
  loading: boolean = false;


  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  @Input() miembro: Miembro[] = [];
  @Output() miembrosActualizados = new EventEmitter<Miembro[]>();
  
  carrerastecnicasList = [
    { codigo: '140014Q', nombre: 'Enfermería', cursosAsignados: 'Ninguno' },
    { codigo: '001001478CD', nombre: 'Enfermería', cursosAsignados: 'Ninguno' },
    // Agrega más carreras técnicas según sea necesario
  ];
  ref: DynamicDialogRef | undefined;
  
  constructor(
    private dialogService: DialogService,
    private maestroService: GeneralService,
    private router: Router,
    
  
   
  ) { }


  ngOnInit(): void {
  //  this.listarmiembros();

  }

 /* listarmiembros() {
    this.maestroService.listarmiembros().subscribe((response: any) => {
      console.log("Lista de Miembros creados", response);
      this.miembrosList = response;
    })

  }*/
  navigateToNuevo(){
    this.ref = this.dialogService.open(RegCarrerastecnicasComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header'
    });

    this.ref.onClose.subscribe((data: any) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
    }); 

  }

  navigateTocurso(){
    this.ref = this.dialogService.open(RegCursosComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header'
    });

    this.ref.onClose.subscribe((data: any) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
    });
    }

 
  navigateToDetalle(){

  }

 






  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal(
      (event.target as HTMLInputElement).value,
      'contains'
    )
  }


  editarMiembro(){

  }

  eliminarMiembro(){

  }

  agregarcurso(){

  }
  onRowSelect(event: any) {
    
    console.log("Organo-colegaido-sect");
  }

  onRowUnselect(event: any) {
    
    
  }

}
