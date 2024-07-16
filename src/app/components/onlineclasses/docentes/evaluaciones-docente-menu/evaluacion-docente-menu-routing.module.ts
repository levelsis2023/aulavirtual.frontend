import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluacionesDocenteMenuComponent } from './evaluaciones-docente-menu/evaluaciones-docente-menu.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: EvaluacionesDocenteMenuComponent }
  ]
  )],
  exports: [RouterModule]
})
export class EvaluacionDocenteMenuRoutingModule { }
