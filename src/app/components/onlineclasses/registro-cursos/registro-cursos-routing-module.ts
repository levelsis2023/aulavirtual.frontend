import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroCursosComponent } from './registro-cursos.component';

const routes: Routes = [
  { path: '', component: RegistroCursosComponent },
  { path: 'registro-curso', component: RegistroCursosComponent } // Ruta para RegistroCursoComponent
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegistroCursosRoutingModule { }
