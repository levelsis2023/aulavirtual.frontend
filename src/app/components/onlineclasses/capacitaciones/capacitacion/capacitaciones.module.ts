import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastModule} from 'primeng/toast'
import {FormsModule} from '@angular/forms'
import {TableModule} from 'primeng/table'
import {ButtonModule} from 'primeng/button'
import {InputTextModule} from 'primeng/inputtext'
import {ToggleButtonModule} from 'primeng/togglebutton'
import {RippleModule} from 'primeng/ripple'
import {MultiSelectModule} from 'primeng/multiselect'
import {DropdownModule} from 'primeng/dropdown'
import {PanelModule} from 'primeng/panel'
import {CalendarModule} from 'primeng/calendar'
import {ProgressBarModule} from 'primeng/progressbar'
import {SliderModule} from 'primeng/slider'
import {RatingModule} from 'primeng/rating'
import {FileUploadModule} from 'primeng/fileupload'
import {ConfirmPopupModule} from 'primeng/confirmpopup'
import {InputTextareaModule} from 'primeng/inputtextarea'
import {TooltipModule} from 'primeng/tooltip'
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {EditorModule} from 'primeng/editor';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TranslateModule} from '@ngx-translate/core';

import {CapacitacionesRoutingModule} from './capacitaciones-routing.module';
import {CapacitacionesComponent} from './capacitaciones.component';
import {RegCapacitacionesComponent} from "./dialog/reg-capacitaciones/reg-capacitaciones.component";
import {BrowserModule} from "@angular/platform-browser";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {InfCapacitacionesComponent} from "./dialog/inf-capacitaciones/inf-capacitaciones.component";
import {
    ParticipanteCapacitacionComponent
} from "./dialog/participantes-capacitacion/participante-capacitacion.component";


@NgModule({
    declarations: [CapacitacionesComponent, RegCapacitacionesComponent, InfCapacitacionesComponent, ParticipanteCapacitacionComponent],
    imports: [
        CommonModule,
        //BrowserModule,
        CapacitacionesRoutingModule,
        CalendarModule,
        TableModule,
        RatingModule,
        ButtonModule,
        SliderModule,
        InputTextModule,
        InputTextareaModule,
        ToggleButtonModule,
        RippleModule,
        MultiSelectModule,
        DropdownModule,
        PanelModule,
        ProgressBarModule,
        ToastModule,
        ConfirmPopupModule,
        FileUploadModule,
        TooltipModule,
        ToastModule,
        PanelModule,
        ConfirmPopupModule,
        ConfirmDialogModule,
        FileUploadModule,
        EditorModule,
        DialogModule,
        DynamicDialogModule,
        TranslateModule,
        FormsModule,
        CKEditorModule
    ]
})
export class CapacitacionesModule {
}
