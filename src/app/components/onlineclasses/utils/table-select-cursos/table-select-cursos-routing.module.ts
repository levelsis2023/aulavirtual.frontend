import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableSelectCursosComponent } from './table-select-cursos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: TableSelectCursosComponent }
  ]
  )],
  exports: [RouterModule]
})
export class TableSelectCursosRoutingModule { }
