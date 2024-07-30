import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpresasComponent } from './lista-empresas.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: ListaEmpresasComponent }
  ]
  )],
  exports: [RouterModule]
})
export class ListaEmpresasRoutingModule { }
