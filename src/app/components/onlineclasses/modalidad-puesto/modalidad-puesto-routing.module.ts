import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalidadPuestoComponent } from './modalidad-puesto.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ModalidadPuestoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ModalidadPuestoRoutingModule { }
