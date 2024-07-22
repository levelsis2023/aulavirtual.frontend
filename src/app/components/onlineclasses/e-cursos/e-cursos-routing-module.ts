import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECursosComponent } from './e-cursos.component';

const routes: Routes = [
  { path: '', component: ECursosComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ECursosRoutingModule { }
