import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesPermisosComponent } from './roles-permisos.component';
import { BandejaUsuariosComponent } from './bandeja-usuarios/bandeja-usuarios.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: BandejaUsuariosComponent }
  ]
  )],
  exports: [RouterModule]
})
export class RolesPermisosRoutingModule { }
