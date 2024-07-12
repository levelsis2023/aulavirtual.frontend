import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoMaestroComponent } from './mantenimiento-maestro/mantenimiento-maestro.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: MantenimientoMaestroComponent }
  ]
  )],
  exports: [RouterModule]
})
export class MantenimientoMaestroRoutingModule { }
