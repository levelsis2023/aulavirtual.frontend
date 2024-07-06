import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadesDidacticasComponent } from './unidades-didacticas.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: UnidadesDidacticasComponent }
  ]
  )],
  exports: [RouterModule]
})
export class UnidadesDidacticasRoutingModule { }
