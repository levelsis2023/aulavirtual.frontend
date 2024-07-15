import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosDocentesComponent } from './cursos-docente/cursos-docentes.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: CursosDocentesComponent }
  ]
  )],
  exports: [RouterModule]
})
export class CursosDocenteRoutingModule { }
