import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosIdentidadComponent } from './documentos-identidad.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DocumentosIdentidadComponent }
    ])
  ],
  exports: [RouterModule]
})
export class DocumentosIdentidadRoutingModule { }
