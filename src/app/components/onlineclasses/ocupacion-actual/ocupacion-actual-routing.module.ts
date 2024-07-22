import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcupacionActualComponent } from './ocupacion-actual.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OcupacionActualComponent }
    ])
  ],
  exports: [RouterModule]
})
export class OcupacionActualRoutingModule { }
