import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaCursosComponent } from './bandeja-cursos/bandeja-cursos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: BandejaCursosComponent }
  ]
  )],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
