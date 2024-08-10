import { Component } from '@angular/core';
import { GeneralService } from '../../../service/general.service';
import { an } from '@fullcalendar/core/internal-common';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import Swal from 'sweetalert2';
import { HelpersService } from 'src/app/helpers.service';
@Component({
  selector: 'app-reg-maestros',
  templateUrl: './reg-maestros.component.html',
  styleUrls: ['./reg-maestros.component.scss']
})
export class RegMaestrosComponent {
  parametroGroupItemList: any[] = [];
  filteredItems: any[] = [];
  parametroDatos: any = {}; // Add this if not already defined
  descripcionParametro: string = ''; // Add this if not already defined
  esNuevo: boolean = true; // Add this if not already defined
  acciones: string = 'register'; // Add this line to define the acciones property
  domain_id = 1; // Add this line to define the domain_id property
  constructor(
    private parametroService: GeneralService,
    public config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private helpersService: HelpersService,
  ) { }

  ngOnInit(): void {
    this.domain_id = this.helpersService.getDominioId();
    if (this.config.data.acciones === 'update') {

      const parametro = {
        tx_nombre: this.config.data.data.tx_nombre,
        txAbreviatura: this.config.data.data.tx_abreviatura,
        txNombre: this.config.data.data.tx_item_description,
        domain_id: this.domain_id,
        nuItemNro: this.config.data.data.nu_item,
        color: this.config.data.data.color,
      };
      console.log(this.config.data.data);
      this.parametroDatos = parametro;
    }
    this.esNuevo = this.config.data.acciones != 'update';
    this.listarEstados()
  }
  listarEstados(): void {
    this.parametroService.getMaestros(this.domain_id).subscribe((response: any) => {
      this.parametroGroupItemList = response;
    });
    console.log('listarEstados:', this.parametroGroupItemList);
  }
  filterItems(event: any) {
    const query = event.query.toLowerCase();
    console.log('parametroGroupItemList:', this.parametroGroupItemList);
    this.filteredItems = this.parametroGroupItemList.filter(item => item.tx_nombre.toLowerCase().includes(query));
    console.log('filterItems:', this.filteredItems);
  }
  onKeydown(event: KeyboardEvent) {

    if (event.key === 'Enter') {
      console.log('entreaqui:', event.key);
      this.parametroDatos.txAbreviatura = '';
      const inputValue = (event.target as HTMLInputElement).value.trim();
      if (inputValue && !this.parametroGroupItemList.some(item => item.tx_nombre.toLowerCase() === inputValue.toLowerCase())) {
        const newItem = { tx_nombre: inputValue, nativo: true }; // Asigna 'f3' o el tipo que desees
        this.parametroGroupItemList.push(newItem);
        this.parametroDatos.e = newItem;
      }
    }
  }
  onItemSelect(event: any) {
    const selectedItem = event; 

    this.parametroDatos.txAbreviatura = selectedItem.value.tx_abreviatura;
  }
  guardarParametro() {
    console.log('parametroDatos:', this.parametroDatos);
    const txNombre = typeof this.parametroDatos.tx_nombre === 'string'
      ? this.parametroDatos.tx_nombre
      : (typeof this.parametroDatos.e === 'string'
        ? this.parametroDatos.e
        : this.parametroDatos.e?.tx_nombre || this.parametroDatos.tx_nombre?.tx_nombre || '');

    const parametro = {
      tx_nombre: txNombre,
      tx_abreviatura: this.parametroDatos.txAbreviatura,
      tx_item_description: this.parametroDatos.txNombre,
      domain_id: this.domain_id,
      nu_item: this.parametroDatos.nuItemNro,
      color: this.parametroDatos.color,
    };

    this.parametroService.guardarParametro(parametro).subscribe(
      (response: any) => {
        console.log('response:', response);
        this.ref?.close(); // Close the dialog
        Swal.fire({
          title: '¡Registro guardado!',
          text: 'El parámetro ha sido guardado correctamente.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            // Reload the list or perform any other action
      
          }
        });
      },
      (error: any) => {
        this.parametroDatos = {};
        console.error('Error al registrar el parametro', error);
        Swal.fire({
          title: 'Error!',
          text: 'Hubo un error al registrar el parámetro.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
  updateParametros() {
    console.log('parametroDatos:', this.parametroDatos);
    const txNombre = typeof this.parametroDatos.tx_nombre === 'string'
      ? this.parametroDatos.tx_nombre
      : (typeof this.parametroDatos.e === 'string'
        ? this.parametroDatos.e
        : this.parametroDatos.e?.tx_nombre || this.parametroDatos.tx_nombre?.tx_nombre || '');

    const parametro = {
      tx_nombre: txNombre,
      tx_abreviatura: this.parametroDatos.txAbreviatura,
      tx_item_description: this.parametroDatos.txNombre,
      domain_id: this.domain_id,
      nu_item: this.parametroDatos.nuItemNro,
      id: this.config.data.data.nu_id_parametro,
      color: this.parametroDatos.color,
    };

    this.parametroService.updateParametro(parametro).subscribe(
      (response: any) => {
        // Implement the logic to handle the response
        console.log('response:', response);
        this.ref?.close(); // Close the dialog

        Swal.fire(
          'Actualizado!',
          'El parámetro ha sido actualizado.',
          'success'
        );
      },
      (error: any) => {
        // Implement the logic to handle the error
        this.parametroDatos = {};
        console.error('Error al registrar el parametro', error);
        Swal.fire(
          'Error!',
          'Hubo un error al actualizar el parámetro.',
          'error'
        );
      }
    );
}

  closeModal() {
    this.ref?.close(); // Close the dialog

  }
}