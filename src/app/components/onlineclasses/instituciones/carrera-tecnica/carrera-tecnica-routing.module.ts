import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraTecnicaComponent } from './carrera-tecnica.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: CarreraTecnicaComponent }
  ]
  )],
  exports: [RouterModule]
})
export class CarreraTecnicaRoutingModule { }
