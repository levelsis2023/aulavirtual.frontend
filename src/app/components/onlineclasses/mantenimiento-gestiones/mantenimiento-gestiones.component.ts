import { Component } from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {AeEstadosComponent} from "../instituciones/estados/ae-estados/ae-estados.component";
import {GeneralService} from "../service/general.service";
import {AeGestionesComponent} from "./ae-gestiones/ae-gestiones.component";

@Component({
  selector: 'app-mantenimiento-gestiones',
  templateUrl: './mantenimiento-gestiones.component.html',
  styleUrls: ['./mantenimiento-gestiones.component.scss']
})
export class MantenimientoGestionesComponent {

    loading: boolean = false;
    gestionList: any[] = [];
    originalgestionList: any[] = [];
    ref: DynamicDialogRef | undefined;

    constructor(
        private dialogService: DialogService,
        private areasDeFormacionService: GeneralService,
    ) { }

    ngOnInit(): void {

        this.listarEstados();

    }

    listarEstados() {
        this.areasDeFormacionService.getGestionesEi().subscribe((response: any) => {

            this.gestionList = response;
            this.originalgestionList = [...response];
        });
    }

    onGlobalFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
        if (!filterValue) {
            this.gestionList = [...this.originalgestionList];
            return;
        }

        this.gestionList = this.originalgestionList.filter(area =>
            (area.nombre.toLowerCase().includes(filterValue))
        );
    }

    navigateAddCurso() {
        this.ref = this.dialogService.open(AeGestionesComponent, {
            width: '60%',
            styleClass: 'custom-dialog-header',
            data: {acciones: 'add'}
        });
    }



    // datos = []
  data  = [
    {
      item: 'prueba1',
      nombre: 'Nombre1',
      abreviatura: 'Abrev1',
      grupo: 'Grupo1',
      dominio: 'Dominio1'
    },
    {
      item: 'prueba2',
      nombre: 'Nombre2',
      abreviatura: 'Abrev2',
      grupo: 'Grupo2',
      dominio: 'Dominio2'
    },
    {
      item: 'prueba2',
      nombre: 'Nombre2',
      abreviatura: 'Abrev2',
      grupo: 'Grupo2',
      dominio: 'Dominio2'
     },
    {
      item: 'prueba2',
      nombre: 'Nombre2',
      abreviatura: 'Abrev2',
      grupo: 'Grupo2',
      dominio: 'Dominio2'
    }
    // más datos si es necesario
  ];
}
