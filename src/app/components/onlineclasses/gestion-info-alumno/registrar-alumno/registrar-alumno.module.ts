import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api'
import { RegistrarAlumnoRoutingModule } from './registrar-alumno-routing.module';
import { RegistrarAlumnosComponent } from './registrar-alumnos.component';
import es from '@angular/common/locales/es';
registerLocaleData(es)

@NgModule({
  declarations: [ ],
  providers: [
    ConfirmationService,
    MessageService,
    {
        provide: LOCALE_ID,
        useValue: 'es',
    }
],
  imports: [
    CommonModule,
    RegistrarAlumnoRoutingModule,
    
  ]
})
export class RegistrarAlumnoModule { }
