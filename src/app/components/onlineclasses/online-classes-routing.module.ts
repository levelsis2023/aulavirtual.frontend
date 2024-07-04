import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', data:{breadcrumd: 'Inicio'}, loadChildren: () => import('src/app/demo/components/dashboards/ecommerce/ecommerce.dashboard.module').then(m=> m.EcommerceDashboardModule) },
    { path: 'registro-matricula', data: { breadcrumb: 'Registro de Matricula' }, loadChildren: () => import('./registro-matricula/matricula.module').then(m => m.MatriculaModule) },
  ])],
  exports: [RouterModule]
})
export class OnlineClassesRoutingModule { }
