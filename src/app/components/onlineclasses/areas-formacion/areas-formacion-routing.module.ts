import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasFormacionComponent } from './areas-formacion.component';
// import { AreasFormacionComponent } from './areas-formacion.component';

const routes: Routes = [
  { path: '', component: AreasFormacionComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AreasFormacionRoutingModule { }
