import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-postulantes',
  templateUrl: './lista-postulantes.component.html',
  styleUrls: ['./lista-postulantes.component.scss']
})
export class ListaPostulantesComponent {
  // datos = []
    data  = [
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

}
