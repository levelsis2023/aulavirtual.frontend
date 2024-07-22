import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoGestionesComponent } from './mantenimiento-gestiones.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: MantenimientoGestionesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class MantenimientoGestionesRoutingModule { }
