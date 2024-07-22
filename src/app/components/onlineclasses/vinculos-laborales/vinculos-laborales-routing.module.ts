import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinculosLaboralesComponent } from './vinculos-laborales.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: VinculosLaboralesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class VinculosLaboralesRoutingModule { }
