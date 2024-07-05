import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', data:{breadcrumd: 'Inicio'}, loadChildren: () => import('src/app/demo/components/dashboards/ecommerce/ecommerce.dashboard.module').then(m=> m.EcommerceDashboardModule) },
    { path: 'registro-instituciones', data: { breadcrumb: 'Registro de Instituciones' }, loadChildren: () => import('./instituciones/instituciones.module').then(m => m.InstitucionesModule) },
    { path: 'bandeja-instituciones', data: { breadcrumb: 'Bandeja de Instituciones' }, loadChildren: () => import('./instituciones/bandeja-instituciones/bandeja-instituciones.module').then(m => m.BandejaInstitucionesModule) },
    { path: 'carrera-tecnica', data: { breadcrumb: 'Carrera Tecnica' }, loadChildren: () => import('./instituciones/carrera-tecnica/carrera-tecnica.module').then(m => m.CarreraTecnicaModule) },
    { path: 'configuraciones', data: { breadcrumb: 'Configuraciones' }, loadChildren: () => import('./instituciones/configuraciones/configuraciones.module').then(m => m.ConfiguracionesModule) },
  ])],
  exports: [RouterModule]
})
export class OnlineClassesRoutingModule { }
