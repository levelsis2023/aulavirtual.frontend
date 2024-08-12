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
  imports: [CommonModule, PanelModule, DropdownModule, FormsModule, TableModule],
})
export class ListaPermisosComponent {

  visible: boolean = false;
  nombre: string = '';
  permisos!: any[];
  permisosAgrupados: any[] = []; // Aquí almacenarás los permisos agrupados
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
    
    this.permisoService.getPermisos(this.domain_id).subscribe((response: any) => {
      console.log("Lista de permisos", response);
      this.permisos = response;
      this.organizarPermisosPorGrupo(); // Organiza los permisos una vez que los obtienes
    });

    this.permisoService.getEmpresasDropdown().subscribe((response: any) => {
      this.instituciones = response;
    });

    this.idRol = config.data;

    if (this.domain_id) {
      this.permisoService.getRolPermisos(this.idRol, this.domain_id).subscribe((response: any[]) => {
        this.permisosSeleccionados = new Set(response.map(permission => permission.id));
        console.log("this.permisosSeleccionados");
        console.log(this.permisosSeleccionados);
        this.organizarPermisosPorGrupo(); // Asegúrate de reorganizar los permisos después de cargar los seleccionados
      });
    }
  }

  onInstitucionChange(event: any) {
    this.selectedInstitucion = event.value;
    this.permisoService.getRolPermisos(this.idRol, this.selectedInstitucion ?? 1).subscribe((response: any[]) => {
      this.permisosSeleccionados = new Set(response.map(permission => permission.id));
      console.log("this.permisosSeleccionados");
      console.log(this.permisosSeleccionados);
      this.organizarPermisosPorGrupo(); // Reorganiza los permisos después del cambio de institución
    });
  }

  onCheckboxChange(permisoId: number, event: Event, grupo: any) {
    const isChecked = (event.target as HTMLInputElement).checked;

    // Si se selecciona o deselecciona un hijo, se aplica la acción a todo el grupo
    grupo.permisos.forEach((permiso: any) => {
        permiso.seleccionado = isChecked;
        if (isChecked) {
            this.permisosSeleccionados.add(permiso.id);
        } else {
            this.permisosSeleccionados.delete(permiso.id);
        }
    });

    // Asegurar que el checkbox padre también refleje este cambio
    grupo.seleccionado = isChecked;
}
toggleGroup(grupo: any) {
  grupo.isExpanded = !grupo.isExpanded;
}
  guardarPermisos() {
    const data = {
      id: this.idRol,
      idPermisos: Array.from(this.permisosSeleccionados),
      domain_id: this.domain_id ?? this.selectedInstitucion
    };
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
          // Acciones después del guardado, si es necesario
        });
      },
      (error: any) => {
        console.error('Error al guardar el rol', error);
      }
    );
  }
  seleccionarGrupo(grupo: any) {
    grupo.permisos.forEach((permiso: any) => {
        permiso.seleccionado = grupo.seleccionado;
        if (grupo.seleccionado) {
            this.permisosSeleccionados.add(permiso.id);
        } else {
            this.permisosSeleccionados.delete(permiso.id);
        }
    });
}

organizarPermisosPorGrupo() {
  const grupos: { [key: string]: { nombre: string; permisos: any[]; seleccionado: boolean, isExpanded: boolean } } = {};

  this.permisos
      .filter(permiso => ![
          'ver_modulo_agendaVirtual',
          'ver_modulo_ejecucionDeProyectos',
          'ver_modulo_gestionDeIncidencias'
      ].includes(permiso.nombre))
      .forEach(permiso => {
          const grupoNombre = permiso.nombre.split('_')[0];

          if (!grupos[grupoNombre]) {
              grupos[grupoNombre] = {
                  nombre: grupoNombre,
                  permisos: [],
                  seleccionado: false,
                  isExpanded: false
              };
          }

          grupos[grupoNombre].permisos.push({
              id: permiso.id,
              nombre: permiso.nombre,
              seleccionado: this.permisosSeleccionados.has(permiso.id)
          });
      });

  // Actualizar el estado de los checkboxes padres
  Object.values(grupos).forEach((grupo: any) => {
      grupo.seleccionado = grupo.permisos.every((permiso: any) => permiso.seleccionado);
  });

  this.permisosAgrupados = Object.values(grupos);
}

  
  

  closeDialog() {
    this.visible = false;
  }

  closeModal() {
    this.ref.close({ register: false });
  }
}
