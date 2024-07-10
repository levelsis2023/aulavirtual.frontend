import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoCursoComponent } from './tipo-curso.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: TipoCursoComponent }
  ]
  )],
  exports: [RouterModule]
})
export class TipoCursoRoutingModule { }
