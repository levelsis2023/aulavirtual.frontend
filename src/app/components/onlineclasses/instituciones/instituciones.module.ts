import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionesRoutingModule } from './instituciones-routing.module';
import { RegitroInstitucionesComponent } from './regitro-instituciones/regitro-instituciones.component';


@NgModule({
  declarations: [
    RegitroInstitucionesComponent
  ],
  imports: [
    CommonModule,
    InstitucionesRoutingModule
  ]
})
export class InstitucionesModule { }
