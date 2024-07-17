import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentoGestionAlumnoComponent } from './documento-gestion-alumno/documento-gestion-alumno.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: DocumentoGestionAlumnoComponent }
  ]
  )],
  exports: [RouterModule]
})
export class DocumentosGestionAlumnoRoutingModule { }
