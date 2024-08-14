import {NgModule} from "@angular/core";
import {FormularioOiComponent} from "./formulario-oi.component";
import {PanelModule} from "primeng/panel";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { FileUploadModule } from "primeng/fileupload";

@NgModule({
    declarations: [
        FormularioOiComponent,
    ],
    imports: [
        PanelModule,
        FormsModule,
        InputTextModule,
        ReactiveFormsModule,
        DropdownModule,
        CalendarModule,
        FileUploadModule
    ],
    exports: []
})
export class FormularioOiModule{}

