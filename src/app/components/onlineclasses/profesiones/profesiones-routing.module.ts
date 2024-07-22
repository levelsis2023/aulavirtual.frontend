import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesionesComponent } from './profesiones.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ProfesionesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ProfesionesRoutingModule { }
