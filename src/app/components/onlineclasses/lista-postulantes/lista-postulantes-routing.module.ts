import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostulantesComponent } from './lista-postulantes.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: ListaPostulantesComponent }
  ]
  )],
  exports: [RouterModule]
})
export class ListaPostulantesRoutingModule { }
