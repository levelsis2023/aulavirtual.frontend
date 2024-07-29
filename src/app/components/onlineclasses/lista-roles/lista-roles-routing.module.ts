import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaRolesComponent } from 'src/app/components/onlineclasses/lista-roles/lista-roles.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: ListaRolesComponent }
  ]
  )],
  exports: [RouterModule]
})
export class ListaRolesRoutingModule { }
