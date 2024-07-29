import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import Swal from 'sweetalert2';
import { GeneralService } from '../../../service/general.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-lista-roles',
  standalone: true,
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.scss'],
  imports:[CommonModule,
    PanelModule,

    FormsModule,
    TableModule],
})
export class ListaRolesComponent {

  visible: boolean = false;
  roles: any[] = [];
  estado!: boolean;
  rolSeleccionado: any; // Aquí se guardará el rol seleccionado

  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService,
    public ref: DynamicDialogRef,
    private rolService: GeneralService,
    public config: DynamicDialogConfig
  ) {
    this.rolService.getRoles().subscribe((response: any) => {
      console.log("Lista de Roles", response);
      this.roles = response;
    });
  }


  guardarRolEmpresa(rol: any,id:number) {
    // this.ref.close();

    this.rolService.actualizarEmpresa(rol, id).subscribe(
      (response: any) => {
        this.closeModal();
        Swal.fire({
          title: '¡Éxito!',
          text: 'Los Datos se registraron correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {

        });
      },
      (error: any) => {
        console.error('Error al guardar el rol', error);
      }
    );
  }


  onCheckboxChange(rolId: number, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.rolSeleccionado.add(rolId);
    } else {
      this.rolSeleccionado.delete(rolId);
    }
  }

  closeDialog() {
    this.visible = false;
  }


  closeModal() {
    this.ref.close({ register: false });
  }
}
