import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/es';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { AlumnoService } from '../../../service/alumno.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../service/common.service';
import { Table } from 'primeng/table'; 
import Swal from 'sweetalert2';

interface tipodoc {
    name: string;
    value: number;
    code: string;
}
interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
interface Carreras {
    name: string;
    value: number;
}
interface Ciclos {
    name: string;
    value: number;
}

@Component({
    selector: 'app-reg-alumno',
    templateUrl: './reg-alumno.component.html',
    styleUrls: ['./reg-alumno.component.scss'],

    providers: [MessageService],
})
export class RegAlumnoComponent {
    alumnoForm: FormGroup;
    alumno: any;
    tipodocu!: tipodoc[];
    tipoDocumentoSeleccionado: tipodoc | undefined;
    tipoDoc: tipodoc | undefined;
    carreraSeleccionada: Carreras | undefined;
    ciclosSeleccionado: Ciclos | undefined;
    carrerasList: Carreras[] = [];
    ciclosList: Ciclos[] = [];

    fechanacimiento: Date | null = new Date();
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        locale: esLocale,
    };
    translateService: any;

    constructor(
        private router: Router,
        private ref: DynamicDialogRef,
        private cdr: ChangeDetectorRef,
        public config: DynamicDialogConfig,
        private parametroService: GeneralService,
        private translate: TranslateService,
        private messageService: MessageService,
        private alumnoService: AlumnoService,
        private commonService: CommonService,
        private fb: FormBuilder
    ) {
        this.alumnoForm = this.fb.group({
            codigo: ['', Validators.required],
            tipoDocumento: ['', Validators.required],
            numeroDocumento: ['', Validators.required],
            nombres: ['', Validators.required],
            apellidos: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            nroCelular: [
                '',
                [Validators.required, Validators.pattern(/^[0-9]{9}$/)],
            ],
            carreraId: ['', Validators.required],
            cicloId: ['', Validators.required],
            edad: ['', [Validators.required, Validators.min(1)]],
            direccion: [''],
            fechaNacimiento: [this.fechanacimiento, Validators.required],
            fotoPerfil: [null],
            fotoCarnet: [null],
        });
    }
    onGlobalFilter(table: Table, event: any) {
      table.filterGlobal(event.target.value, 'contains');
    }

    ngOnInit() {
        this.tipodocu = [
            { name: 'DNI', value: 1, code: 'NY' },
            { name: 'PASAPORTE', value: 2, code: 'RM' },
        ];
        if (this.translate) {
            this.translateChange('es'); // Cambia a español como ejemplo
        } else {
            console.error('TranslateService is not initialized.');
        }

        if (this.config.data) {
            this.alumno = this.config.data.alumno;
            if (this.alumno) {
                this.alumnoForm.patchValue({
                    codigo: this.alumno.codigo,
                    tipoDocumento: 1,
                    numeroDocumento: this.alumno.dni,
                    nombres: this.alumno.nombres,
                    apellidos: this.alumno.apellidos,
                    email: this.alumno.email,
                    nroCelular: this.alumno.celular,
                    carreraId: this.alumno.carrera_id,
                    cicloId: this.alumno.ciclo_id,
                    edad: this.getAge(this.alumno.fecha_nacimiento),
                    direccion: this.alumno.direccion,
                    fechaNacimiento: new Date(this.alumno.fecha_nacimiento),
                    fotoPerfil: this.alumno.foto_perfil,
                    fotoCarnet: this.alumno.foto_carnet,
                });
            }
        }
        this.getCarrerasDropdown();
        this.getCiclosDropdown();
    }
    getAge(dateString: string) {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    onCarnetSelect(event: any) {
        const file = event.files[0];
        this.alumnoForm.patchValue({
            fotoCarnet: file,
        });
    }
    onPerfilSelect(event: any) {
        const file = event.files[0];
        this.alumnoForm.patchValue({
            fotoPerfil: file,
        });
    }
    getCarrerasDropdown() {
        this.commonService.getCarrerasDropdown().subscribe(
            (response) => {
                console.log('Carreras', response);
                this.carrerasList = response.map((carrera: any) => {
                    return {
                        name: carrera.nombres,
                        value: carrera.id,
                    };
                });
            },
            (error) => {
                console.error('Error obteniendo carreras', error);
            }
        );
    }
    getCiclosDropdown() {
        this.commonService.getCiclosDropdown().subscribe(
            (response) => {
                this.ciclosList = response.map((ciclo: any) => {
                    return {
                        name: ciclo.tx_nombre,
                        value: ciclo.nu_id_parametro,
                    };
                });
                console.log('Ciclos', response);
            },
            (error) => {
                console.error('Error obteniendo ciclos', error);
            }
        );
    }
    cambiarIdioma() {
        this.translateService.use('es');
    }
    translateChange(lang: string): void {
        if (this.translate) {
            this.translate.use(lang);
        } else {
            console.error('TranslateService is not initialized.');
        }
    }

    onUpload(event: any) {
        this.messageService.add({
            severity: 'info',
            summary: 'Success',
            detail: 'Archivo cargado correctamente',
        });
    }
    saveAlumno() {
        console.log('Formulario', this.alumnoForm.value);
        if (this.alumnoForm.valid) {
            const formData = new FormData();
            formData.append('codigo', this.alumnoForm.get('codigo')?.value);
            formData.append(
                'tipoDocumento',
                this.alumnoForm.get('tipoDocumento')?.value
            );
            formData.append(
                'numeroDocumento',
                this.alumnoForm.get('numeroDocumento')?.value
            );
            formData.append('nombres', this.alumnoForm.get('nombres')?.value);
            formData.append(
                'apellidos',
                this.alumnoForm.get('apellidos')?.value
            );
            formData.append(
                'nroCelular',
                this.alumnoForm.get('nroCelular')?.value
            );
            formData.append(
                'carreraId',
                this.alumnoForm.get('carreraId')?.value
            );
            formData.append('cicloId', this.alumnoForm.get('cicloId')?.value);
            formData.append('edad', this.alumnoForm.get('edad')?.value);
            formData.append('email', this.alumnoForm.get('email')?.value);
            formData.append(
                'direccion',
                this.alumnoForm.get('direccion')?.value
            );

            const fechaNacimiento =
                this.alumnoForm.get('fechaNacimiento')?.value;
            if (fechaNacimiento instanceof Date) {
                const formattedDate = fechaNacimiento
                    .toISOString()
                    .split('T')[0];
                console.log('Fecha de nacimiento', formattedDate);
                formData.append('fechaNacimiento', formattedDate);
            } else {
                console.error(
                    'Fecha de nacimiento no es una instancia de Date'
                );
            }
            if (this.alumnoForm.get('fotoCarnet')?.value) {
                formData.append(
                    'fotoCarnet',
                    this.alumnoForm.get('fotoCarnet')?.value
                );
            }
            if (this.alumnoForm.get('fotoPerfil')?.value) {
                formData.append(
                    'fotoPerfil',
                    this.alumnoForm.get('fotoPerfil')?.value
                );
            }
            if (this.alumno) {
                formData.append('id', this.alumno.id);
                formData.append('domain_id', this.alumno.domain_id??"1");
            }else{
                formData.append('domain_id', "1");
            }
            this.alumnoService.saveAlumno(formData).subscribe(
                (response) => {
                    this.ref.close({ register: true });
                    Swal.fire({
                        title: '¡Éxito!',
                        text: 'Los Datos se registraron correctamente',
                        icon: 'success',
                        confirmButtonText: 'Aceptar',
                    }).then(() => {});
                },
                (error) => {
                    console.error('Error guardando alumno', error);
                }
            );
        } else {
            console.error('Formulario inválido');
        }
    }
    closeModal() {
        this.ref.close({ register: false });
    }
}
