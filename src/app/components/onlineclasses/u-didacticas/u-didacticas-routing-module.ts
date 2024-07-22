import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UDidacticasComponent } from './u-didacticas.component';

const routes: Routes = [
  { path: '', component: UDidacticasComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UDidacticasRoutingModule { }
