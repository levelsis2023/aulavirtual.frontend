import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAlumnosComponent } from './registro-alumnos.component';

const routes: Routes = [
  { path: '', component: RegistroAlumnosComponent },
  { path: 'registro-alumno', component: RegistroAlumnosComponent } // Ruta para RegistroAlumnosComponent
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegistroAlumnosRoutingModule { }
