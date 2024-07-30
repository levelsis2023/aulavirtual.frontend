import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { GeneralService } from '../../service/general.service';
import { RegAlumnoComponent } from '../dialog/reg-alumno/reg-alumno.component';
import { AlumnoService } from '../../service/alumno.service';
import Swal from 'sweetalert2';
@Component({
    selector: 'app-bandeja-alumno',
    templateUrl: './bandeja-alumno.component.html',
    styleUrls: ['./bandeja-alumno.component.scss'],
})
export class BandejaAlumnoComponent {
    @ViewChild('filter') filter!: ElementRef;
    @ViewChild('dt1') tabledt1: Table | undefined;
    instituciones: any[] = [];
    loading: boolean = false;
    ref: DynamicDialogRef | undefined;
    constructor(
        private dialogService: DialogService,
        private maestroService: GeneralService,
        private alumnoService: AlumnoService,
        private router: Router
    ) {}

    ngOnInit() {
        console.log('Datos-extraidos-de-bandeja-colegiado-PARA MIEMBRO');
        this.cargaInicial();
    }

    cargaInicial(): void {
        //get all alumnos
        this.loading = true;
        this.alumnoService.getAlumnos().subscribe(
            (data: any) => {
                this.instituciones = data;
                this.loading = false;
            },
            (error: any) => {
                this.loading = false;
            }
        );
    }
    eliminarAlumno(alumno: any) {
        //show swall confirmation
        Swal.fire({
            title: 'Desea eliminar el alumno?',
            text: 'No podrá revertir esta acción',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí',
            cancelButtonText: 'No',
            
        }).then((result) => {
            if (result.isConfirmed) {
              const data = {
                domain_id: alumno.domain_id ?? 1,
                id: alumno.id,
            };
            this.alumnoService.deleteAlumno(data).subscribe((data: any) => {
                //show swall success
                Swal.fire({
                    title: '¡Éxito!',
                    text: 'eliminado correctamente',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                }).then(
                    () => {
                        this.cargaInicial();
                    },
                    (error: any) => {
                        this.loading = false;
                        Swal.fire({
                            title: '¡Error!',
                            text: 'Error al eliminar',
                            icon: 'error',
                            confirmButtonText: 'Aceptar',
                        });
                    }
                );
            });
            }
        });
    }
    navigateToEditar(alumno: any) {
        const data = {
            domain_id: alumno.domain_id ?? 1,
            id: alumno.id,
        };
        //call service to get alumno
        this.alumnoService.showAlumno(data).subscribe(
            (data: any) => {
                this.ref = this.dialogService.open(RegAlumnoComponent, {
                    data: {
                        alumno: data,
                    },
                    width: '60%',
                    styleClass: 'custom-dialog-header',
                });
                this.ref.onClose.subscribe((data: any) => {
                    console.log(data)
                    if (data) {
                        if (data.register) {
                          console.log('Organo-colegaido-sect');
                            this.cargaInicial();
                        }
                    }
                    this.router.routeReuseStrategy.shouldReuseRoute = () =>
                        false;
                    this.router.onSameUrlNavigation = 'reload';
                });
            },
            (error: any) => {
                this.loading = false;
            }
        );
    }
    navigateToNuevo() {
        this.ref = this.dialogService.open(RegAlumnoComponent, {
            width: '60%',
            styleClass: 'custom-dialog-header',
        });

        this.ref.onClose.subscribe((data: any) => {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        if (table) {
            console.log('Organo-colegaido-sect');
            table.filterGlobal(
                (event.target as HTMLInputElement).value,
                'contains'
            );
        }
    }

    onRowSelect(event: any) {
        console.log('Organo-colegaido-sect');
    }

    onRowUnselect(event: any) {}
}
