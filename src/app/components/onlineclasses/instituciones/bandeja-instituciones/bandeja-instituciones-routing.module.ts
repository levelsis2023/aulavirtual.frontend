import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaInstitucionesComponent } from './bandeja-instituciones.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: BandejaInstitucionesComponent }
  ]
  )],
  exports: [RouterModule]
})
export class BandejaInstitucionesRoutingModule { }
