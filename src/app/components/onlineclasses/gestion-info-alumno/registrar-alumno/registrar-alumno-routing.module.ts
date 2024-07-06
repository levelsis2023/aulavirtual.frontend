import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarAlumnosComponent } from './registrar-alumnos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: RegistrarAlumnosComponent }
  ]
  )],
  exports: [RouterModule]
})
export class RegistrarAlumnoRoutingModule { }
