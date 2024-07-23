import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { RegistraUsuarioComponent } from './dialog/registra-usuario/registra-usuario.component';

@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.scss']
})
export class RegistroAlumnosComponent {
  ref: DynamicDialogRef | undefined;

  constructor(
    private router: Router,
    private dialogService: DialogService,
  ) { }

  data = [
    {
      item: 'prueba1',
      nombre: 'Nombre1',
      abreviatura: 'Abrev1',
      grupo: 'Grupo1',
      dominio: 'Dominio1',
      direccion: 'Dirección',
      telefono: 'teléfono',
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

  navigateToNuevo() {
    this.ref = this.dialogService.open(RegistraUsuarioComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header'
    });

    this.ref.onClose.subscribe((dataFromDialog) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
    });
  }
}
