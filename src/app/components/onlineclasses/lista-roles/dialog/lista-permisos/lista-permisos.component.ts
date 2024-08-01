import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import Swal from 'sweetalert2';
import { GeneralService } from '../../../service/general.service';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-lista-permisos',
  templateUrl: './lista-permisos.component.html',
  styleUrls: ['./lista-permisos.component.scss'],
  standalone: true,
  imports: [CommonModule,
    PanelModule,

    FormsModule,
    TableModule],
})
export class ListaPermisosComponent {

  visible: boolean = false;
  nombre: string = '';
  permisos!: any[];
  permisosSeleccionados: Set<number> = new Set();
  idRol!: number;
  estado!: boolean;

  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService,
    public ref: DynamicDialogRef,
    private permisoService: GeneralService,
    public config: DynamicDialogConfig,
  ) {
    this.permisoService.getPermisos().subscribe((response: any) => {
      console.log("Lista de permisos", response);
      this.permisos = response;
    });

    this.idRol = config.data;

    this.permisoService.getRolPermisos(this.idRol).subscribe((response: any[]) => {
      this.permisosSeleccionados = new Set(response.map(permission => permission.id));
      console.log("this.permisosSeleccionados");
      console.log(this.permisosSeleccionados);
    });
  }



  onCheckboxChange(permisoId: number, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.permisosSeleccionados.add(permisoId);
    } else {
      this.permisosSeleccionados.delete(permisoId);
    }
  }

  guardarPermisos() {
    const data = {
      id: this.idRol,
      idPermisos: Array.from(this.permisosSeleccionados)
    }
    console.log(data);
    this.permisoService.guardarRolPermisos(data).subscribe(
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





  closeDialog() {
    this.visible = false;
  }


  closeModal() {
    this.ref.close({ register: false });
  }
}
