import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaCarreratecnicaComponent } from './bandeja-carreratecnica/bandeja-carreratecnica.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: BandejaCarreratecnicaComponent }
  ]
  )],
  exports: [RouterModule]
})
export class CarrerasTecnicasRoutingModule { }
