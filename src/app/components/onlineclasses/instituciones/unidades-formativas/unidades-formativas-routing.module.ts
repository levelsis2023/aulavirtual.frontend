import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadesFormativasComponent } from './unidades-formativas.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: UnidadesFormativasComponent }
  ]
  )],
  exports: [RouterModule]
})
export class UnidadesFormativasRoutingModule { }
