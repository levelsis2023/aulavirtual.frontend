import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegitroInstitucionesComponent } from './regitro-instituciones/regitro-instituciones.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: RegitroInstitucionesComponent },
    { path: ':id', component: RegitroInstitucionesComponent }
  ])],
  exports: [RouterModule]
})
export class InstitucionesRoutingModule { }
