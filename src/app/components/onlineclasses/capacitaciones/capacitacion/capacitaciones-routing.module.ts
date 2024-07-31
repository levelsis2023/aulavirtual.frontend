import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacitacionesComponent } from './capacitaciones.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: CapacitacionesComponent }
  ]
  )],
  exports: [RouterModule]
})
export class CapacitacionesRoutingModule { }
