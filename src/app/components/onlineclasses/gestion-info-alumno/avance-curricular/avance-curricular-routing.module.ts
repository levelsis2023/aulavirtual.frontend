import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaAvanceCurricularComponent } from './bandeja-avance-curricular/bandeja-avance-curricular.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component:  BandejaAvanceCurricularComponent}
  ]
  )],
  exports: [RouterModule]
})
export class AvanceCurricularRoutingModule { }
