import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TCursosComponent } from './t-cursos.component';

const routes: Routes = [
  { path: '', component: TCursosComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TCursosRoutingModule { }
