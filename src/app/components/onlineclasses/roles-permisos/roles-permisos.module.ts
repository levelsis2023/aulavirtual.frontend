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
import { RolesPermisosRoutingModule } from './roles-permisos-routing.module';
import { EditorModule } from 'primeng/editor';
import { BandejaUsuariosComponent } from './bandeja-usuarios/bandeja-usuarios.component';
import { RolesPermisosComponent } from './roles-permisos.component';
import { RegistraUsuarioComponent } from './dialog/registra-usuario/registra-usuario.component';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { AppComponent } from 'src/app/app.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    
         RolesPermisosComponent,
               
         
         
    
  ],
  imports: [
    CommonModule,
    RolesPermisosRoutingModule,
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
      ProgressBarModule,
      ToastModule,
      ConfirmPopupModule,
      FileUploadModule,
      TooltipModule,
      ToastModule,      
      TableModule,
      ConfirmPopupModule,
      ConfirmDialogModule,
      FileUploadModule,
      EditorModule,
      DialogModule,    
      DynamicDialogModule,      
      TranslateModule,
      ReactiveFormsModule,  
      RegistraUsuarioComponent
      
      
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class RolesPermisosModule { }
