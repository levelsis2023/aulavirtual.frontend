import {Component} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Capacitaciones} from "../../../../interface/general";

@Component({
    selector: 'app-reg-capacitaciones',
    templateUrl: './participante-capacitacion.component.html',
    styleUrls: ['./participante-capacitacion.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class ParticipanteCapacitacionComponent {
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
