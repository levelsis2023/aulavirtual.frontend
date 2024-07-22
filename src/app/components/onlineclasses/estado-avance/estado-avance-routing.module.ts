import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoAvanceComponent } from './estado-avance.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: EstadoAvanceComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EstadoAvanceRoutingModule { }
