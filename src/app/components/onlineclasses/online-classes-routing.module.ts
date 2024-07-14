import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', data:{breadcrumd: 'Inicio'}, loadChildren: () => import('src/app/demo/components/dashboards/ecommerce/ecommerce.dashboard.module').then(m=> m.EcommerceDashboardModule) },
    { path: 'registro-instituciones', data: { breadcrumb: 'Registro de Instituciones' }, loadChildren: () => import('../onlineclasses/instituciones/instituciones.module').then(m => m.InstitucionesModule) },
    { path: 'bandeja-instituciones', data: { breadcrumb: 'Bandeja de Instituciones' }, loadChildren: () => import('../onlineclasses/instituciones/bandeja-instituciones/bandeja-instituciones.module').then(m => m.BandejaInstitucionesModule) },
    { path: 'carrera-tecnica', data: { breadcrumb: 'Carrera Tecnica' }, loadChildren: () => import('../onlineclasses/instituciones/carrera-tecnica/carrera-tecnica.module').then(m => m.CarreraTecnicaModule) },
    { path: 'configuraciones', data: { breadcrumb: 'Configuraciones' }, loadChildren: () => import('../onlineclasses/instituciones/configuraciones/configuraciones.module').then(m => m.ConfiguracionesModule) },
    { path: 'bandeja-alumno', data: { breadcrumb: 'Bandeja de Alumnos' }, loadChildren: () => import('../onlineclasses/gestion-info-alumno/bandeja-alumno/bandeja-alumno.module').then(m => m.BandejaAlumnoModule) },
   /* { path: 'registro-alumno', data: { breadcrumb: 'Registrar Alumno' }, loadChildren: () => import('./gestion-info-alumno/registrar-alumno/registrar-alumno.module').then(m => m.RegistrarAlumnoModule) }, */
    { path: 'ciclos-academicos', data: { breadcrumb: 'Ciclos Academicos' }, loadChildren: () => import('../onlineclasses/instituciones/ciclos/ciclos.module').then(m => m.CiclosModule) },
    { path: 'area-formacion', data: { breadcrumb: 'Área de Formación' }, loadChildren: () => import('../onlineclasses/instituciones/area-formacion/area-formacion.module').then(m => m.AreaFormacionModule) },
    { path: 'unidades-formativas', data: { breadcrumb: 'Unidades Formativas' }, loadChildren: () => import('../onlineclasses/instituciones/unidades-formativas/unidades-formativas.module').then(m => m.UnidadesFormativasModule) },
    { path: 'unidades-didacticas', data: { breadcrumb: 'Unidades Didacticas' }, loadChildren: () => import('../onlineclasses/instituciones/unidades-didacticas/unidades-didacticas.module').then(m => m.UnidadesDidacticasModule) },
    { path: 'estado-cursos', data: { breadcrumb: 'Estado de Cursos' }, loadChildren: () => import('../onlineclasses/instituciones/estado-cursos/estado-cursos.module').then(m => m.EstadoCursosModule) },
    { path: 'tipo-curso', data: { breadcrumb: 'Tipo de Curso' }, loadChildren: () => import('../onlineclasses/instituciones/tipo-curso/tipo-curso.module').then(m => m.TipoCursoModule) },
    { path: 'asigna-curso-docente', data: { breadcrumb: 'Asingna Curso Docente' }, loadChildren: () => import('../onlineclasses/configuraciones/asigna-curso-docente/asgina-curso-docente.module').then(m => m.AsginaCursoDocenteModule) },
    { path: 'bandeja-curso-docente', data: { breadcrumb: 'Bandeja de Curso del Docente' }, loadChildren: () => import('../onlineclasses/configuraciones/bandeja-curso-docente/bandeja-curso-docente.module').then(m => m.BandejaCursoDocenteModule) },
    { path: 'bandeja-usuarios', data: { breadcrumb: 'Bandeja de Usuarios' }, loadChildren: () => import('../onlineclasses/roles-permisos/bandeja-usuarios/bandeja-usuarios.module').then(m => m.BandejaUsuariosModule) },
    { path: 'parametro-maestro', data: { breadcrumb: 'Mantenimiento de Maestros' }, loadChildren: () => import('../onlineclasses/mantenimiento-maestro/mantenimiento-maestro.module').then(m => m.MantenimientoMaestroModule) },
    { path: 'bandeja-carrtecnicas', data: { breadcrumb: 'Bandeja de Carreras técnicas' }, loadChildren: () => import('../onlineclasses/carreras-tecnicas/carreras-tecnicas.module').then(m => m.CarrerasTecnicasModule) },
    { path: 'bandeja-curso', data: { breadcrumb: 'Bandeja de cursos' }, loadChildren: () => import('../onlineclasses/cursos/cursos.module').then(m => m.CursosModule) },
    

    


  ])],
  exports: [RouterModule]
})
export class OnlineClassesRoutingModule { }
