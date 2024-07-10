import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaCursoDocenteComponent } from './asigna-curso-docente.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: AsignaCursoDocenteComponent }
  ]
  )],
  exports: [RouterModule]
})
export class AsginaCursoDocenteRoutingModule { }
