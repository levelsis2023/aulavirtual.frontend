import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { RegPreguntasDocenteComponent } from '../dialog/reg-preguntas-docente/reg-preguntas-docente.component';

@Component({
  selector: 'app-bandeja-preguntas-docente',
  templateUrl: './bandeja-preguntas-docente.component.html',
  styleUrls: ['./bandeja-preguntas-docente.component.scss']
})
export class BandejaPreguntasDocenteComponent implements OnInit{

  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;

  loading: boolean = false;
  ref: DynamicDialogRef | undefined;


  preguntas: any[] = [
    { codigo: '154748100', nombre: 'Pregunta 1', tipo: 'Multiple Choice', valor: 10 },
    { codigo: '154748100', nombre: 'Pregunta 2', tipo: 'Essay', valor: 20 },
    // Agrega más preguntas según sea necesario
  ];
  constructor( private router: Router,
    private dialogService: DialogService,) { }

  ngOnInit(): void {
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal(
      (event.target as HTMLInputElement).value,
      'contains'
    )
  }

  navigateToNuevo(){
    this.ref = this.dialogService.open(RegPreguntasDocenteComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header'
    });

    this.ref.onClose.subscribe((dataFromDialog) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
    });

  }

}
