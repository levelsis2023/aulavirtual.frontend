import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosGestionComponent } from './documentos-gestion.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DocumentosGestionComponent }
    ])
  ],
  exports: [RouterModule]
})
export class DocumentosGestionRoutingModule { }
