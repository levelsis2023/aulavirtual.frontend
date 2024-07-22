import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelPuestoComponent } from './nivel-puesto.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: NivelPuestoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class NivelPuestoRoutingModule { }
