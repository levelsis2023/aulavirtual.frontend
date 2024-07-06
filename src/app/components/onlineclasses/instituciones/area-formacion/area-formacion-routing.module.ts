import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaFormacionComponent } from './area-formacion.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: AreaFormacionComponent }
  ]
  )],
  exports: [RouterModule]
})
export class AreaFormacionRoutingModule { }
