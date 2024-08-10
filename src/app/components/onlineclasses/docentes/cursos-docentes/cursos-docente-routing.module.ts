import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosDocentesComponent } from './cursos-docente/cursos-docentes.component';
import { VerCursoDeCarreraComponent } from '../../carreras-tecnicas/dialog/ver-curso-de-carrera/ver-curso-de-carrera.component';

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
