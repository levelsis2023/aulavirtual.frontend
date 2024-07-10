import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaCursoDocenteComponent } from './bandeja-curso-docente.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: BandejaCursoDocenteComponent }
  ]
  )],
  exports: [RouterModule]
})
export class BandejaCursoDocenteRoutingModule { }
