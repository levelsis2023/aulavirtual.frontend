import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosComponent } from './estados.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: EstadosComponent }
  ]
  )],
  exports: [RouterModule]
})
export class EstadosRoutingModule { }
