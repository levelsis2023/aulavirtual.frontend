import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiclosComponent } from './ciclos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: CiclosComponent }
  ]
  )],
  exports: [RouterModule]
})
export class CiclosRoutingModule { }
