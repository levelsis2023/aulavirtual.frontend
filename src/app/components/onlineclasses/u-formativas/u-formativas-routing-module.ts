import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UFormativasComponent } from './u-formativas.component';

const routes: Routes = [
  { path: '', component: UFormativasComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UFormativasRoutingModule { }
