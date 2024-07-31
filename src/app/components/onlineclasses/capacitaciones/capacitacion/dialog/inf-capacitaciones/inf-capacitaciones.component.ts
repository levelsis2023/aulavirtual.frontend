import {Component} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Capacitaciones} from "../../../../interface/general";

@Component({
    selector: 'app-reg-capacitaciones',
    templateUrl: './inf-capacitaciones.component.html',
    styleUrls: ['./inf-capacitaciones.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class InfCapacitacionesComponent {
    htmlContent:string = '';

    parametroDatos: Capacitaciones = new Capacitaciones();
    constructor(
        public config: DynamicDialogConfig,
    ) {
        //this.acciones = config.data.action;
        //if (this.acciones == 'edit'){

            this.htmlContent = config.data.dato;
            console.log(this.parametroDatos)
        //}
    }




}
