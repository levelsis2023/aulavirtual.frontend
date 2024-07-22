import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPostulanteComponent } from './editar-postulante.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: EditarPostulanteComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EditarPostulanteRoutingModule { }
