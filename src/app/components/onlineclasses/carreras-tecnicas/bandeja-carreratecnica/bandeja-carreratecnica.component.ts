import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Miembro, Parametro } from '../../interface/general';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../service/general.service';
import { Router } from '@angular/router';
import { RegCarrerastecnicasComponent } from '../dialog/reg-carrerastecnicas/reg-carrerastecnicas.component';
import { RegCursosComponent } from '../../cursos/dialog/reg-cursos/reg-cursos.component';

@Component({
  selector: 'app-bandeja-carreratecnica',
  templateUrl: './bandeja-carreratecnica.component.html',
  styleUrls: ['./bandeja-carreratecnica.component.scss']
})
export class BandejaCarreratecnicaComponent {

  loading: boolean = false;

  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  @Input() miembro: Miembro[] = [];
  @Output() miembrosActualizados = new EventEmitter<Miembro[]>();

  carrerastecnicasList: any[] = []; // Cambia el tipo a any[] para recibir los datos del backend
  originalCarrerastecnicasList: any[] = []; // Add this line to store the original list

  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private carrerasTecnicasService: GeneralService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listarCarrerasTecnicas();
  }

  listarCarrerasTecnicas() {
    this.carrerasTecnicasService.getCarrerasTecnicas().subscribe((response: any) => {
      console.log("Lista de Carreras Técnicas", response);
      this.carrerastecnicasList = response;
      this.originalCarrerastecnicasList = [...response]; // Actualiza la lista original después de obtener los datos
    });
  }

  navigateToNuevo() {
    console.log("nuevo");

    this.ref = this.dialogService.open(RegCarrerastecnicasComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header'
    });

    this.ref.onClose.subscribe((data: any) => {
      console.log("Cerrando dialogo");
      this.listarCarrerasTecnicas(); // Recargar los datos de la tabla
    });
  }

  navigateTocurso(id: number,total_creditos:number) {
    this.ref = this.dialogService.open(RegCursosComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { id: id ,total_creditos:total_creditos}
    });

    this.ref.onClose.subscribe((data: any) => {
      this.listarCarrerasTecnicas(); // Recargar los datos de la tabla
    });
  }

  navigateToDetalle() {
    // Implementar la navegación al detalle
  }

  onGlobalFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    console.log("Filtro Global", filterValue);
    if (!filterValue) {
      this.carrerastecnicasList = [...this.originalCarrerastecnicasList];
      return;
    }

    this.carrerastecnicasList = this.originalCarrerastecnicasList.filter(carrera =>
      (carrera.codigo && carrera.codigo.toLowerCase().includes(filterValue)) ||
      (carrera.nombres && carrera.nombres.toLowerCase().includes(filterValue)) ||
      (carrera.cursos && carrera.cursos.toLowerCase().includes(filterValue))
    );
  }

  editarMiembro() {
    // Implementar la edición de miembro
  }

  eliminarMiembro() {
    // Implementar la eliminación de miembro
  }

  agregarcurso() {
    // Implementar la adición de curso
  }

  onRowSelect(event: any) {
    console.log("Organo-colegaido-sect");
  }

  onRowUnselect(event: any) {
    // Implementar la acción al deseleccionar una fila
  }
}