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
import { HelpersService } from 'src/app/helpers.service';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-lista-permisos',
  templateUrl: './lista-permisos.component.html',
  styleUrls: ['./lista-permisos.component.scss'],
  standalone: true,
  imports: [CommonModule,
    PanelModule,
    DropdownModule,
    FormsModule,
    TableModule],
})
export class ListaPermisosComponent {

  visible: boolean = false;
  nombre: string = '';
  permisos!: any[];
  instituciones: any[] = [];
  permisosSeleccionados: Set<number> = new Set();
  selectedInstitucion: any;
  idRol!: number;
  estado!: boolean;
  domain_id: any;

  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService,
    public ref: DynamicDialogRef,
    private permisoService: GeneralService,
    public config: DynamicDialogConfig,
    private helpersService: HelpersService
  ) {
    this.domain_id = this.helpersService.getDominioId();
    this.permisoService.getPermisos(this.domain_id
    ).subscribe((response: any) => {
      console.log("Lista de permisos", response);
      this.permisos = response;
    });
    this.permisoService.getEmpresasDropdown().subscribe((response: any) => {
      this.instituciones = response;
    });
    this.idRol = config.data;

   


  }
  onInstitucionChange(event: any) {
    this.selectedInstitucion = event.value;
    this.permisoService.getRolPermisos(this.idRol,this.selectedInstitucion??1).subscribe((response: any[]) => {
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
      idPermisos: Array.from(this.permisosSeleccionados),
      domain_id: this.domain_id??this.selectedInstitucion
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
