import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ToastModule } from 'primeng/toast'
import { FormsModule } from '@angular/forms'
import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { ToggleButtonModule } from 'primeng/togglebutton'
import { RippleModule } from 'primeng/ripple'
import { MultiSelectModule } from 'primeng/multiselect'
import { DropdownModule } from 'primeng/dropdown'
import { PanelModule } from 'primeng/panel'
import { CalendarModule } from 'primeng/calendar'
import { ProgressBarModule } from 'primeng/progressbar'
import { SliderModule } from 'primeng/slider'
import { RatingModule } from 'primeng/rating'
import { FileUploadModule } from 'primeng/fileupload'
import { ConfirmationService, MessageService } from 'primeng/api'
import { ConfirmPopupModule } from 'primeng/confirmpopup'
import es from '@angular/common/locales/es'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { TooltipModule } from 'primeng/tooltip'
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { BandejaCursoDocenteRoutingModule } from './bandeja-curso-docente-routing.module';
import { BandejaCursoDocenteComponent } from './bandeja-curso-docente.component';


@NgModule({
  declarations: [BandejaCursoDocenteComponent],
  imports: [
    CommonModule,
    BandejaCursoDocenteRoutingModule,
    FormsModule,
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
      ConfirmPopupModule,
      ConfirmDialogModule,
      FileUploadModule
  ]
})
export class BandejaCursoDocenteModule { }
