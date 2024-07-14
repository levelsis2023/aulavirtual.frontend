import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Miembro, Parametro } from '../../interface/general';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { GeneralService } from '../../service/general.service';
import { RegMaestrosComponent } from '../dialog/reg-maestros/reg-maestros.component';

@Component({
  selector: 'app-mantenimiento-maestro',
  templateUrl: './mantenimiento-maestro.component.html',
  styleUrls: ['./mantenimiento-maestro.component.scss']
})
export class MantenimientoMaestroComponent {
  loading: boolean = false;
  miembrosList: Parametro[] = [];

  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  @Input() miembro: Miembro[] = [];
  @Output() miembrosActualizados = new EventEmitter<Miembro[]>();

  ref: DynamicDialogRef | undefined;
  constructor(
    private dialogService: DialogService,
    private maestroService: GeneralService,
    private router: Router,  
  ) { }


  ngOnInit(): void {
    this.listarmiembros();

  }

  listarmiembros() {
    this.maestroService.listarmiembros().subscribe((response: any) => {
      console.log("Lista de Miembros creados", response);
      this.miembrosList = response;
    })

  }
  navigateToNuevo(){
    this.ref = this.dialogService.open(RegMaestrosComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header'
    });

    this.ref.onClose.subscribe((data: any) => {
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


  editarMiembro(miembro: Miembro[]){

  }

  eliminarMiembro(e: any, miembro: Miembro[]){

  }

}
