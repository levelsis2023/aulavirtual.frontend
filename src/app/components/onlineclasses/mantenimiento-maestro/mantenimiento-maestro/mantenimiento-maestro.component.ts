import { Component, ElementRef, EventEmitter, Input, Output, ViewChild,OnInit } from '@angular/core';
import { Miembro, Parametro } from '../../interface/general';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { GeneralService } from '../../service/general.service';
import { RegMaestrosComponent } from '../dialog/reg-maestros/reg-maestros.component';
import Swal from 'sweetalert2';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mantenimiento-maestro',
  templateUrl: './mantenimiento-maestro.component.html',
  styleUrls: ['./mantenimiento-maestro.component.scss']
})
export class MantenimientoMaestroComponent  implements OnInit {
  loading: boolean = false;
  parametrosList: any[] = [];
  originalParametrosList: any[] = [];

  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  @Input() miembro: Miembro[] = [];
  @Output() miembrosActualizados = new EventEmitter<Miembro[]>();

  ref: DynamicDialogRef | undefined;
  constructor(
    private dialogService: DialogService,
    private maestroService: GeneralService,
    private router: Router,  
    private cdr: ChangeDetectorRef

  ) { }


  ngOnInit(): void {
    this.listarmiembros();

  }

  listarmiembros() {
    this.maestroService.getMaestrosRecursive().subscribe((response: any) => {
      console.log("Lista de Miembros creados", response);
      this.parametrosList = response;
      this.originalParametrosList = [...this.parametrosList];
      this.cdr.detectChanges(); // Forzar la detección de cambios
    });
  }
  navigateToNuevo(){
    this.ref = this.dialogService.open(RegMaestrosComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { acciones: 'register'  }
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarmiembros();

      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
    });
    

  }

  onGlobalFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    console.log("Filtro Global", filterValue);
    if (!filterValue) {
      this.parametrosList = [...this.originalParametrosList];
      return;
    }

    this.parametrosList = this.originalParametrosList.filter(parametro =>
      (parametro.nu_item && parametro.nu_item.toString().toLowerCase().includes(filterValue)) ||
      (parametro.tx_item_description && parametro.tx_item_description.toLowerCase().includes(filterValue)) ||
      (parametro.tx_abreviatura && parametro.tx_abreviatura.toLowerCase().includes(filterValue)) ||
      (parametro.tx_nombre && parametro.tx_nombre.toLowerCase().includes(filterValue)) ||
      (parametro.nombre && parametro.nombre.toLowerCase().includes(filterValue))
    );
}


  editarParametro(data: any){
    this.ref = this.dialogService.open(RegMaestrosComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { data: data, acciones: 'update'  } // Pass the miembro data here

    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarmiembros();

      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
    });
  }

  eliminarParametro(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.maestroService.eliminarParametro(id).subscribe(
          response => {
            Swal.fire(
              'Eliminado',
              'El parámetro ha sido eliminado.',
              'success'
            );
            this.listarmiembros(); // Recargar los datos de la tabla después de la eliminación exitosa
          },
          error => {
            Swal.fire(
              'Error',
              'Hubo un problema al eliminar el parámetro.',
              'error'
            );
          }
        );
      }
    });
  }

}
