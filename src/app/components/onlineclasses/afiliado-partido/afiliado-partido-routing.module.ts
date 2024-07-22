import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfiliadoPartidoComponent } from './afiliado-partido.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: AfiliadoPartidoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AfiliadoPartidoRoutingModule { }
