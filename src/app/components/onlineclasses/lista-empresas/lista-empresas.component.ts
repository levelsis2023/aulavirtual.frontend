import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../service/general.service';
import { RegistraEmpresaComponent } from './dialog/registra-empresa/registra-empresa.component';
import { ListaRolesComponent } from './dialog/lista-roles/lista-roles.component';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.scss']
})


export class ListaEmpresasComponent {
  // datos = []

  ref: DynamicDialogRef | undefined;

  empresas: any[] = [];
  empresa: any[] = [];

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private empresaService: GeneralService


  ) {

    this.empresaService.getEmpresas().subscribe((response: any) => {
      console.log("Lista de EMPRESAS", response);
      this.empresas = response;
    });
    console.log('asdsa');


  }



  data = [
    {
      item: 'prueba1',
      nombre: 'Nombre1',
      abreviatura: 'Abrev1',
      grupo: 'Grupo1',
      dominio: 'Dominio1'
    },
    {
      item: 'prueba2',
      nombre: 'Nombre2',
      abreviatura: 'Abrev2',
      grupo: 'Grupo2',
      dominio: 'Dominio2'
    },
    {
      item: 'prueba2',
      nombre: 'Nombre2',
      abreviatura: 'Abrev2',
      grupo: 'Grupo2',
      dominio: 'Dominio2'
    }
    // más datos si es necesario
  ];

  navigateToNuevo(id: number) {

    if (id > 0) {

      this.empresaService.getEmpresa(id).subscribe((response: any) => {
        this.empresa = response;
        this.ref = this.dialogService.open(RegistraEmpresaComponent, {
          width: '60%',
          styleClass: 'custom-dialog-header',
          data: this.empresa
        });
        this.ref.onClose.subscribe((dataFromDialog) => {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
        });
        console.log(this.empresa)

      });

    }
    else {
      this.ref = this.dialogService.open(RegistraEmpresaComponent, {
        width: '60%',
        styleClass: 'custom-dialog-header'
      });

      this.ref.onClose.subscribe((dataFromDialog) => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
      });
    }
  }

  eliminar(id: number) {
    this.empresaService.eliminarEmpresa(id).subscribe(
      (response: any) => {
        console.log('empresa eliminada:', response);
        this.empresaService.getEmpresas().subscribe((response: any) => {
          console.log("Lista de Empresas", response);
          this.empresas = response;
        });
      },
      (error: any) => {
        console.error('Error eliminando ciclo:', error);
      }
    );
  }



  listaRoles(id: number) {


    this.ref = this.dialogService.open(ListaRolesComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header'
    });

    this.ref.onClose.subscribe((dataFromDialog) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
    });
  }


}
