import { ChangeDetectorRef, Component, Inject } from '@angular/core';
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

interface Permiso {
    id: number | null;
    nombre: string;
    seleccionado: boolean;
    hijos?: Permiso[];
}

@Component({
    selector: 'app-lista-permisos',
    templateUrl: './lista-permisos.component.html',
    styleUrls: ['./lista-permisos.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        PanelModule,
        DropdownModule,
        FormsModule,
        TableModule,
    ],
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
        private helpersService: HelpersService,
        private cd: ChangeDetectorRef
    ) {
        this.domain_id = this.helpersService.getDominioId();

        this.permisoService
            .getPermisos(this.domain_id)
            .subscribe((response: any) => {
                console.log('Lista de permisos', response);
                this.permisos = response;
                this.organizarPermisosPorGrupo();
            });

        this.permisoService.getEmpresasDropdown().subscribe((response: any) => {
            this.instituciones = response;
        });

        this.idRol = config.data;

        if (this.domain_id) {
            this.permisoService
                .getRolPermisos(this.idRol, this.domain_id)
                .subscribe((response: any[]) => {
                    this.permisosSeleccionados = new Set(
                        response.map((permission) => permission.id)
                    );
                    console.log('this.permisosSeleccionados');
                    console.log(this.permisosSeleccionados);
                    this.organizarPermisosPorGrupo(); // Asegúrate de reorganizar los permisos después de cargar los seleccionados
                    this.cd.detectChanges();
                });
        }
    }

    toggleGrupo(grupo: any) {
        grupo.expanded = !grupo.expanded;
    }

    onInstitucionChange(event: any) {
        this.selectedInstitucion = event.value;
        this.permisoService
            .getRolPermisos(this.idRol, this.selectedInstitucion ?? 1)
            .subscribe((response: any[]) => {
                this.permisosSeleccionados = new Set(
                    response.map((permission) => permission.id)
                );
                console.log('this.permisosSeleccionados');
                console.log(this.permisosSeleccionados);
                this.organizarPermisosPorGrupo(); // Reorganiza los permisos después del cambio de institución
            });
    }

    onCheckboxChange(permisoId: number | null, event: Event, grupo: any) {
        if (permisoId === null) {
            console.warn(`Permiso con ID nulo detectado en el grupo ${grupo.nombre}`);
            return;
        }
    
        const isChecked = (event.target as HTMLInputElement).checked;
        const permisoSeleccionado = this.findPermisoById(grupo.permisos, permisoId);
        
        if (permisoSeleccionado) {
            this.togglePermisoSeleccion(permisoSeleccionado, isChecked);
        }
    
        // Verifica si todos los permisos en el grupo están seleccionados
        this.verificarSeleccionGrupo(grupo);
    
        this.cd.detectChanges(); // Forzar la actualización de la vista
    }
    
    
    
    togglePermisoSeleccion(permiso: Permiso, isChecked: boolean) {
        permiso.seleccionado = isChecked;
    
        // Propagar selección a los hijos
        if (permiso.hijos && permiso.hijos.length > 0) {
            permiso.hijos.forEach((hijo: Permiso) => {
                this.togglePermisoSeleccion(hijo, isChecked); 
            });
        }
    
        // Actualizar el set de permisos seleccionados
        if (permiso.id !== null) {
            if (isChecked) {
                this.permisosSeleccionados.add(permiso.id);
            } else {
                this.permisosSeleccionados.delete(permiso.id);
            }
        }
    }
    verificarSeleccionGrupo(grupo: any) {
        grupo.seleccionado = grupo.permisos.every((permiso: Permiso) => this.verificarSeleccionPermiso(permiso));
    }
    
    verificarSeleccionPermiso(permiso: Permiso): boolean {
        if (permiso.hijos && permiso.hijos.length > 0) {
            return permiso.hijos.every(hijo => this.verificarSeleccionPermiso(hijo));
        }
        return permiso.seleccionado;
    }
    ngOnInit() {
        this.organizarPermisosPorGrupo();
    }
    
    findPermisoById(permisos: Permiso[], id: number | null): Permiso | null {
        if (id === null) {
            console.warn(`Intento de búsqueda de un permiso con ID nulo`);
            return null;
        }
    
        for (const permiso of permisos) {
            if (permiso.id === id) {
                return permiso;
            } else if (permiso.hijos && permiso.hijos.length > 0) {
                const encontrado = this.findPermisoById(permiso.hijos, id);
                if (encontrado) {
                    return encontrado;
                }
            }
        }
        return null;
    }
    
    toggleGroup(grupo: any) {
        grupo.isExpanded = !grupo.isExpanded;
    }

    guardarPermisos() {
        const data = {
            id: this.idRol,
            idPermisos: Array.from(this.permisosSeleccionados),
            domain_id: this.domain_id ?? this.selectedInstitucion,
        };
        console.log(data);
        this.permisoService.guardarRolPermisos(data).subscribe(
            (response: any) => {
                this.closeModal();
                Swal.fire({
                    title: '¡Éxito!',
                    text: 'Los Datos se registraron correctamente',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
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
        grupo.permisos.forEach((permiso: Permiso) => {
            this.togglePermisoSeleccion(permiso, grupo.seleccionado);
    
            if (permiso.hijos && permiso.hijos.length > 0) {
                permiso.hijos.forEach((hijo: Permiso) => {
                    this.togglePermisoSeleccion(hijo, grupo.seleccionado);
                });
            }
        });
    
        this.cd.detectChanges(); // Asegúrate de que la vista se actualice
    }
    ngAfterViewInit() {
        this.organizarPermisosPorGrupo();
        this.cd.detectChanges(); // Forzar la detección de cambios después de que la vista esté completamente cargada
    }
    organizarPermisosPorGrupo() {
        const grupos: { [key: string]: any } = {
            Seguridad: {
                nombre: 'Seguridad',
                id: 3,  // id correspondiente al permiso de "ver_modulo_seguridad"
                seleccionado: false,
                permisos: [
                    { id: 4, nombre: 'Configuración', seleccionado: false, hijos: [] },
                    { id: 9, nombre: 'Roles y Permisos', seleccionado: false, hijos: [] },
                    {
                        id: 10,
                        nombre: 'Usuarios',
                        seleccionado: false,
                        hijos: [
                            { id: 11, nombre: 'Nuevo', seleccionado: false },
                            { id: 12, nombre: 'Ver', seleccionado: false },
                            { id: 13, nombre: 'Editar', seleccionado: false },
                            { id: 14, nombre: 'Eliminar', seleccionado: false },
                        ],
                        isExpanded: false,
                    },
                ],
                isExpanded: false,
            },
            EstructuraOrganica: {
                nombre: 'ESTRUCTURA ORGÁNICA',
                id: 2,  // id correspondiente al permiso de "ver_modulo_estructura_organica"
                seleccionado: false,
                permisos: [
                    { id: 15, nombre: 'Mantenimientos', seleccionado: false, hijos: [] },
                    {
                        id: 16,
                        nombre: 'Instituciones',
                        seleccionado: false,
                        hijos: [
                            { id: 17, nombre: 'Nuevo', seleccionado: false },
                            { id: 18, nombre: 'Ver', seleccionado: false },
                            { id: 19, nombre: 'Editar', seleccionado: false },
                            { id: 20, nombre: 'Eliminar', seleccionado: false },
                            {
                                id: 21,
                                nombre: 'ÁREAS',
                                seleccionado: false,
                                hijos: [
                                    { id: 22, nombre: 'Nuevo', seleccionado: false },
                                    { id: 23, nombre: 'Ver', seleccionado: false },
                                    { id: 24, nombre: 'Editar', seleccionado: false },
                                    { id: 25, nombre: 'Eliminar', seleccionado: false },
                                    {
                                        id: 26,
                                        nombre: 'PUESTOS Y PERFILES',
                                        seleccionado: false,
                                        hijos: [
                                            { id: 27, nombre: 'Nuevo', seleccionado: false },
                                            { id: 28, nombre: 'Ver', seleccionado: false },
                                            { id: 29, nombre: 'Editar', seleccionado: false },
                                            { id: 30, nombre: 'Eliminar', seleccionado: false },
                                        ],
                                        isExpanded: false,
                                    },
                                ],
                                isExpanded: false,
                            },
                        ],
                        isExpanded: false,
                    },
                ],
                isExpanded: false,
            },
            AulaVirtual: {
                nombre: 'AULA VIRTUAL',
                id: 10,  // id correspondiente al permiso de "ver_modulo_aulaVirtual"
                seleccionado: false,
                permisos: [
                    {
                        id: 31,
                        nombre: 'MANTENIMIENTOS',
                        seleccionado: false,
                        hijos: [
                            {
                                id: 32,
                                nombre: 'CARRERAS TÉCNICAS',
                                seleccionado: false,
                                hijos: [
                                    { id: 33, nombre: 'Nuevo', seleccionado: false },
                                    { id: 34, nombre: 'Editar', seleccionado: false },
                                    { id: 35, nombre: 'Ver', seleccionado: false },
                                    { id: 36, nombre: 'Eliminar', seleccionado: false },
                                    {
                                        id: 37,
                                        nombre: 'CURSO',
                                        seleccionado: false,
                                        hijos: [
                                            { id: 38, nombre: 'Nuevo', seleccionado: false },
                                            { id: 39, nombre: 'Editar', seleccionado: false },
                                            { id: 40, nombre: 'Ver', seleccionado: false },
                                            { id: 41, nombre: 'Eliminar', seleccionado: false },
                                            {
                                                id: 42,
                                                nombre: 'SYLLABUS',
                                                seleccionado: false,
                                                hijos: [
                                                    { id: 43, nombre: 'Ver', seleccionado: false },
                                                ],
                                                isExpanded: false,
                                            },
                                            {
                                                id: 44,
                                                nombre: 'ALUMNOS',
                                                seleccionado: false,
                                                hijos: [
                                                    { id: 45, nombre: 'Ver', seleccionado: false },
                                                    { id: 46, nombre: 'Asignar', seleccionado: false },
                                                ],
                                                isExpanded: false,
                                            },
                                            {
                                                id: 47,
                                                nombre: 'HORARIOS',
                                                seleccionado: false,
                                                hijos: [
                                                    { id: 48, nombre: 'Ver', seleccionado: false },
                                                    { id: 49, nombre: 'Programar', seleccionado: false },
                                                ],
                                                isExpanded: false,
                                            },
                                            {
                                                id: 50,
                                                nombre: 'ASISTENCIA',
                                                seleccionado: false,
                                                hijos: [
                                                    { id: 51, nombre: 'Ver', seleccionado: false },
                                                    { id: 52, nombre: 'Programar', seleccionado: false },
                                                ],
                                                isExpanded: false,
                                            },
                                            {
                                                id: 53,
                                                nombre: 'TEMAS',
                                                seleccionado: false,
                                                hijos: [
                                                    { id: 54, nombre: 'Ver', seleccionado: false },
                                                ],
                                                isExpanded: false,
                                            },
                                            {
                                                id: 55,
                                                nombre: 'GRUPOS DE EVALUACIONES',
                                                seleccionado: false,
                                                hijos: [
                                                    { id: 56, nombre: 'Nuevo', seleccionado: false },
                                                    { id: 57, nombre: 'Editar', seleccionado: false },
                                                    { id: 58, nombre: 'Ver', seleccionado: false },
                                                    { id: 59, nombre: 'Eliminar', seleccionado: false },
                                                    {
                                                        id: 60,
                                                        nombre: 'EVALUACIONES DE GRUPO',
                                                        seleccionado: false,
                                                        hijos: [
                                                            { id: 61, nombre: 'Nuevo', seleccionado: false },
                                                            { id: 62, nombre: 'Editar', seleccionado: false },
                                                            { id: 63, nombre: 'Ver', seleccionado: false },
                                                            { id: 64, nombre: 'Eliminar', seleccionado: false },
                                                            {
                                                                id: 65,
                                                                nombre: 'PREGUNTAS',
                                                                seleccionado: false,
                                                                hijos: [
                                                                    { id: 66, nombre: 'Nuevo', seleccionado: false },
                                                                    { id: 67, nombre: 'Editar', seleccionado: false },
                                                                    { id: 68, nombre: 'Ver', seleccionado: false },
                                                                    { id: 69, nombre: 'Eliminar', seleccionado: false },
                                                                ],
                                                                isExpanded: false,
                                                            },
                                                        ],
                                                        isExpanded: false,
                                                    },
                                                ],
                                                isExpanded: false,
                                            },
                                        ],
                                        isExpanded: false,
                                    },
                                ],
                                isExpanded: false,
                            },
                        ],
                        isExpanded: false,
                    },
                ],
                isExpanded: false,
            },
            Alumnos: {
                nombre: 'ALUMNOS',
                id: 70,  // Asigna un ID único al grupo de Alumnos
                seleccionado: false,
                permisos: [
                    {
                        id: 71,
                        nombre: 'Datos Personales',
                        seleccionado: false,
                        hijos: [
                            { id: 72, nombre: 'Nuevo', seleccionado: false },
                            { id: 73, nombre: 'Editar', seleccionado: false },
                            { id: 74, nombre: 'Ver', seleccionado: false },
                            { id: 75, nombre: 'Eliminar', seleccionado: false },
                        ],
                    },
                    {
                        id: 76,
                        nombre: 'Documentos de Gestión',
                        seleccionado: false,
                        hijos: [
                            { id: 77, nombre: 'Nuevo', seleccionado: false },
                            { id: 78, nombre: 'Editar', seleccionado: false },
                            { id: 79, nombre: 'Ver', seleccionado: false },
                            { id: 80, nombre: 'Eliminar', seleccionado: false },
                        ],
                    },
                    {
                        id: 81,
                        nombre: 'Avance Curricular',
                        seleccionado: false,
                        hijos: [
                            { id: 82, nombre: 'Editar', seleccionado: false },
                            { id: 83, nombre: 'Ver', seleccionado: false },
                        ],
                    },
                    { id: 84, nombre: 'Cursos', seleccionado: false },
                    { id: 85, nombre: 'Horarios', seleccionado: false },
                ],
                isExpanded: false,
            },
            Docentes: {
                nombre: 'DOCENTES',
                id: 86,  // Asigna un ID único al grupo de Docentes
                seleccionado: false,
                permisos: [
                    {
                        id: 87,
                        nombre: 'Datos Personales',
                        seleccionado: false,
                        hijos: [
                            { id: 88, nombre: 'Nuevo', seleccionado: false },
                            { id: 89, nombre: 'Editar', seleccionado: false },
                            { id: 90, nombre: 'Ver', seleccionado: false },
                            { id: 91, nombre: 'Eliminar', seleccionado: false },
                        ],
                    },
                    {
                        id: 92,
                        nombre: 'Horarios',
                        seleccionado: false,
                        hijos: [
                            { id: 93, nombre: 'Editar', seleccionado: false },
                        ],
                    },
                    { id: 94, nombre: 'Cursos', seleccionado: false },
                ],
                isExpanded: false,
            },
        };
    
        // Aquí acomodamos los permisos que vienen del backend
        this.permisos.forEach((permiso) => {
            // Mapear los permisos del backend a los grupos
            if (permiso.nombre === 'ver_modulo_estructura_organica') {
                grupos['EstructuraOrganica'].id = permiso.id;
                grupos['EstructuraOrganica'].seleccionado = this.permisosSeleccionados.has(permiso.id);
            }
        });
    
        // Convertimos el objeto grupos a un array de grupos para facilitar su uso en el template
        this.permisosAgrupados = Object.values(grupos);
    
        // Asegúrate de propagar la selección correctamente
        this.propagateSelection(this.permisosAgrupados);
        this.permisosAgrupados.forEach(grupo => {
            this.verificarSeleccionGrupo(grupo);
        });
        // Forzar la detección de cambios para asegurarse de que la vista se actualice
        this.cd.detectChanges();
    }
    
    propagateSelection(permisos: Permiso[]) {
        permisos.forEach((permiso: Permiso) => {
            if (permiso.seleccionado && permiso.hijos && permiso.hijos.length > 0) {
                this.togglePermisoSeleccion(permiso, true); // Marcar todos los hijos si el padre está marcado
            }
    
            // Si hay permisos hijos, propagar la selección recursivamente
            if (permiso.hijos && permiso.hijos.length > 0) {
                this.propagateSelection(permiso.hijos);
            }
        });
    }
    closeDialog() {
        this.visible = false;
    }

    closeModal() {
        this.ref.close({ register: false });
    }
}
