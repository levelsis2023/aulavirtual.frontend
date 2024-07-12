import { Component, ViewChild, ElementRef,  } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { RegistraUsuarioComponent } from '../dialog/registra-usuario/registra-usuario.component';

@Component({
  selector: 'app-bandeja-usuarios',
  templateUrl: './bandeja-usuarios.component.html',
  styleUrls: ['./bandeja-usuarios.component.scss'],
  //providers: [DialogService] // Provide DialogService here
})
export class BandejaUsuariosComponent {

  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  instituciones = [
    { nombre: 'Harold Jams Carrillo G', email: 'jamscg.developer@gmail.com', rol: 'Admin' },
    { nombre: 'Ceiber abel contreras T', email: 'ceiber123@gmail.com', rol: 'Docente' }
  ];
  loading: boolean = false;
  ref: DynamicDialogRef | undefined;
 

  constructor(
    private router: Router,
    private dialogService: DialogService,
    
  
  ) { }

  ngOnInit(): void {
    
    console.log("Datos-extraidos-de-bandeja-colegiado-PARA MIEMBRO");
    this.cargaInicial();
   

    
  }

  cargaInicial(): void {
   
  }


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

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal(
      (event.target as HTMLInputElement).value,
      'contains'
    )
  }

  onRowSelect(event: any) {
    
    console.log("Organo-colegaido-sect");
  }

  onRowUnselect(event: any) {
    
    
  }

}
