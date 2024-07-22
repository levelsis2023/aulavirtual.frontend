import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradoInstruccionComponent } from './grado-instruccion.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: GradoInstruccionComponent }
    ])
  ],
  exports: [RouterModule]
})
export class GradoInstruccionRoutingModule { }
