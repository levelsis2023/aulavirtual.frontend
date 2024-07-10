import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaUsuariosComponent } from './bandeja-usuarios.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: BandejaUsuariosComponent }
  ]
  )],
  exports: [RouterModule]
})
export class BandejaUsuariosRoutingModule { }
