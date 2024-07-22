import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoCivilComponent } from './estado-civil.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: EstadoCivilComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EstadoCivilRoutingModule { }
