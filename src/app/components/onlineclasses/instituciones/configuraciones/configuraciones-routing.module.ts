import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionesComponent } from './configuraciones.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: ConfiguracionesComponent }
  ]
  )],
  exports: [RouterModule]
})
export class ConfiguracionesRoutingModule { }
