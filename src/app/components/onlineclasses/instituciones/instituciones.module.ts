import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionesRoutingModule } from './instituciones-routing.module';
import { RegitroInstitucionesComponent } from './regitro-instituciones/regitro-instituciones.component';

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
import { BandejaInstitucionesComponent } from './bandeja/bandeja-instituciones/bandeja-instituciones.component';
import { CarreraTecnicaComponent } from './carrera-tecnica/carrera-tecnica.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component'
import { AsignaCursoDocenteComponent } from '../configuraciones/asigna-curso-docente/asigna-curso-docente.component';
import { RegistroCursoDocenteComponent } from '../configuraciones/dialog/registro-curso-docente/registro-curso-docente.component';
import { EditorModule } from 'primeng/editor';
import { ModuloFormativoComponent } from './modulo-formativo/modulo-formativo.component';
import { AeAreaFormacionComponent } from './modulo-formativo/ae-area-formacion/ae-area-formacion.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { AeCiclosComponent } from './ciclo/ae-ciclos/ae-ciclos.component';
import { EstadosComponent } from './estados/estados.component';
import { AeEstadosComponent } from './estados/ae-estados/ae-estados.component';
import { EstadosDeCursoComponent } from './estados-de-curso/estados-de-curso.component';
import { AeEstadoDeCursoComponent } from './estados-de-curso/ae-estado-de-curso/ae-estado-de-curso.component';




@NgModule({
  declarations: [
    RegitroInstitucionesComponent,
    BandejaInstitucionesComponent,
    CarreraTecnicaComponent,
    ConfiguracionesComponent,    
    AsignaCursoDocenteComponent,
    RegistroCursoDocenteComponent,
    ModuloFormativoComponent,
    AeAreaFormacionComponent,
    CicloComponent,
    AeCiclosComponent,
    EstadosComponent,
    AeEstadosComponent,
    EstadosDeCursoComponent,
    AeEstadoDeCursoComponent,
    
    
  ],
  imports: [
      CommonModule,
      InstitucionesRoutingModule,     
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
      PanelModule,
      TableModule,
      ConfirmPopupModule,
      ConfirmDialogModule,
      FileUploadModule,
      EditorModule,
       
  ]
})
export class InstitucionesModule { }
