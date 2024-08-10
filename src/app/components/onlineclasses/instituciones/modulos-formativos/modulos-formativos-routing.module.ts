import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosFormativosComponent } from './modulos-formativos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: ModulosFormativosComponent }
  ]
  )],
  exports: [RouterModule]
})
export class ModulosFormativosRoutingModule { }
