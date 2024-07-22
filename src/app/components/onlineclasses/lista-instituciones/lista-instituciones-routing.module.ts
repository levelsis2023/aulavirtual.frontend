import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaInstitucionesComponent } from './lista-instituciones.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ListaInstitucionesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ListaInstitucionesRoutingModule { }
