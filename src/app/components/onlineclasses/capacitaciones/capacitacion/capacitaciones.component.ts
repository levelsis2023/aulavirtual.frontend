import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import {Capacitaciones, DocumentoGestion, Miembro} from '../../interface/general';
import { RegCapacitacionesComponent} from "./dialog/reg-capacitaciones/reg-capacitaciones.component";
import {ConfirmationService, MessageService} from "primeng/api";
import {CapacitacionesService} from "../../service/capacitaciones.service";
import {InfCapacitacionesComponent} from "./dialog/inf-capacitaciones/inf-capacitaciones.component";
import {
    ParticipanteCapacitacionComponent
} from "./dialog/participantes-capacitacion/participante-capacitacion.component";

@Component({
  selector: 'app-documento-gestion-alumno',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.scss'],
    providers:[ConfirmationService, MessageService]
})
export class CapacitacionesComponent implements OnInit{

  loading: boolean = false;


  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  @Input() miembro: Miembro[] = [];
  @Output() miembrosActualizados = new EventEmitter<Miembro[]>();

  ref: DynamicDialogRef | undefined;

  capacitacionesList: Capacitaciones[]=[];



  constructor(
    private dialogService: DialogService,
    private capacitacionesService: CapacitacionesService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,

  ) { }


  ngOnInit(): void {
      this.listarCapacitaciones();

  }

  listarCapacitaciones() {
    this.capacitacionesService.listarCapacitaciones().subscribe((response: any) => {
      this.capacitacionesList = response;
    })

  }

  navigateToNuevo(){
    this.ref = this.dialogService.open(RegCapacitacionesComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
        data: {action: 'register'}
    });

    this.ref.onClose.subscribe((data: any) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';

        if (data) {
            if (data.register==true) {
                this.listarCapacitaciones();
                this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se registro con éxito.', life: 3000 });
            }
        }
    });

  }


    openFormEditar(parametro: DocumentoGestion) {
        let parametroSeleccionado = Object.assign({}, parametro);
        const ref = this.dialogService.open(RegCapacitacionesComponent, {
            header: 'Parámetros',
            contentStyle: { 'min-height': '10rem' },
            width: '60%',
            data: {action: 'edit', dato: parametroSeleccionado}
        });
        ref.onClose.subscribe((data: any) => {
            if (data) {
                if (data.register==true) {
                    this.listarCapacitaciones();
                    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se modifico con éxito.', life: 3000 });
                }
            }
        });
    }

    deleteCapacitacion(id: number){
        this.confirmationService.confirm({
            header: '¿Está seguro de eliminar el registro?',
            message: 'Una vez guardado los cambios se eliminará los datos de manera permanente.',
            acceptLabel: 'Guardar Cambios',
            rejectLabel: 'Cancelar',
            accept: () => {
                this.capacitacionesService.deleteCapacitacion(id).subscribe((res: any) => {
                    if (res){
                        this.listarCapacitaciones();
                        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se elimino con éxito.', life: 3000 });
                    } else {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar. ', life: 3000 });
                    }
                });
            },
            reject: () => {}
        });
    }




  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal(
      (event.target as HTMLInputElement).value,
      'contains'
    )
  }

    openFormInfoPa(parametro: Capacitaciones) {
        let parametroSeleccionado = Object.assign({}, parametro);
        const ref = this.dialogService.open(ParticipanteCapacitacionComponent, {
            header: 'PARTICIPANTES',
            contentStyle: { 'min-height': '10rem' },
            width: '60%',
            data: {dato: parametro.sylabus}
        });
    }
    openFormInfoSy(parametro: Capacitaciones) {
        let parametroSeleccionado = Object.assign({}, parametro);
        const ref = this.dialogService.open(InfCapacitacionesComponent, {
            header: 'SYLABUS',
            contentStyle: { 'min-height': '10rem' },
            width: '60%',
            data: {dato: parametro.sylabus}
        });
    }

    openFormInfoTe(parametro: Capacitaciones) {
        let parametroSeleccionado = Object.assign({}, parametro);
        const ref = this.dialogService.open(InfCapacitacionesComponent, {
            header: 'TEMAS',
            contentStyle: { 'min-height': '10rem' },
            width: '60%',
            data: {dato: parametro.temas}
        });
    }


}
