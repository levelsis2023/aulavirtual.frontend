import { Component, ViewChild, ElementRef,  } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { RegistraUsuarioComponent } from '../dialog/registra-usuario/registra-usuario.component';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-bandeja-usuarios',
  templateUrl: './bandeja-usuarios.component.html',
  styleUrls: ['./bandeja-usuarios.component.scss'],
  //providers: [DialogService] // Provide DialogService here
})
export class BandejaUsuariosComponent {

  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  usuarios = [
    // { nombre: 'Harold Jams Carrillo G', email: 'jamscg.developer@gmail.com', rol: 'Admin' },
    // { nombre: 'Ceiber abel contreras T', email: 'ceiber123@gmail.com', rol: 'Docente' }
  ];
  loading: boolean = false;
  ref: DynamicDialogRef | undefined;
 

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private userServicio: UsuarioService
  
  ) { }

  ngOnInit(): void {
    
    this.cargaInicial();
   

    
  }

  cargaInicial(): void {
    //call getUsuarios
    this.loading = true;
    this.userServicio.getUsuarios().subscribe(
      (response:any) => {
        this.usuarios = response
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
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
