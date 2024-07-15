import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaDocenteComponent } from './bandeja-docente/bandeja-docente.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: BandejaDocenteComponent }
  ]
  )],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }
