import { Component } from '@angular/core';
import { RegistraUsuarioComponent } from './dialog/registra-usuario/registra-usuario.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { CrearAulaComponentComponent } from './crear-aula-component/crear-aula-component.component';
import { HelpersService } from 'src/app/helpers.service';
import { AulaService } from '../service/aula.service';
import { CrearAulaDisponibilidadComponent } from './crear-aula-disponibilidad/crear-aula-disponibilidad.component';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent {
  // datos = []
  aulas = []
  ref: DynamicDialogRef | undefined;
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private aulaService: AulaService,
    private helpersService: HelpersService
  ) { }
  
  ngOnInit(): void {
    this.getAulas();
  }
  getAulas() {
    this.aulaService.getAulas(this.helpersService.getDominioId()).subscribe((res: any) => {
      this.aulas = res.data;
    });
  }
  deleteAula(id:number) {
    this.aulaService.deleteAula(id).subscribe((res: any) => {
      this.getAulas();
    });
  }
  navigateToEditar(aula:any){
    this.ref = this.dialogService.open(CrearAulaComponentComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: aula
    });
    this.ref.onClose.subscribe((dataFromDialog) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      //reload table
      this.getAulas();
    });
  }
  navigateToDisponibilidad(aula: any) {
    this.ref = this.dialogService.open(CrearAulaDisponibilidadComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: aula
    });
  }
  navigateToNuevo() {
    this.ref = this.dialogService.open(CrearAulaComponentComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header'
    });

    this.ref.onClose.subscribe((dataFromDialog) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      //reload table
      this.getAulas();
    });
  }
}
