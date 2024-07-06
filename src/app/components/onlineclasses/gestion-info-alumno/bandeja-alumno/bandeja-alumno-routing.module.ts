import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaAlumnoComponent } from './bandeja-alumno.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: BandejaAlumnoComponent }
  ]
  )],
  exports: [RouterModule]
})
export class BandejaAlumnoRoutingModule { }
