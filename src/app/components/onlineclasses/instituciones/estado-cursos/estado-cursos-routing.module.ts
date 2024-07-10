import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoCursosComponent } from './estado-cursos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: EstadoCursosComponent }
  ]
  )],
  exports: [RouterModule]
})
export class EstadoCursosRoutingModule { }
