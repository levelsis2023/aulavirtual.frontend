import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {GeneralService} from "../../service/general.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-mantenimiento-gestiones',
    templateUrl: './ae-gestiones.component.html',
    styleUrls: ['./ae-gestiones.component.scss']
})
export class AeGestionesComponent{
    loading: boolean = false;
    parametroForm: FormGroup;
    acciones: any;

    constructor(
        private fb: FormBuilder,
        private ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private parametroService: GeneralService,
    ) {
        this.acciones = this.config.data.acciones;

        this.parametroForm = this.fb.group({
            nombre: ['', Validators.required],
            color: [''],
        });

    }
    ngOnInit(): void {
        if (this.acciones === 'ver' || this.acciones === 'actualizar') {
            this.parametroForm.patchValue({
                nombre: this.config.data.data.nombre,
                color: this.config.data.data.color
            });
        }
    }
    guardarEstado() {
        if (this.parametroForm.valid) {
            const areaFormacion = this.parametroForm.value;
            if (this.acciones === 'actualizar') {
                // Modo edición
                const params ={
                    ...areaFormacion,
                    id:this.config.data.data.id
                }
                this.parametroService.actualizarGestionesEi(params).subscribe(
                    (response: any) => {
                        this.ref?.close();
                        Swal.fire({
                            title: '¡Éxito!',
                            text: 'Los Datos se actualizaron correctamente',
                            icon: 'success',
                            confirmButtonText: 'Aceptar'
                        }).then(() => {
                            // Aquí puedes agregar lógica adicional después de la actualización
                        });
                    },
                    (error: any) => {
                        console.error('Error al actualizar el parametro', error);
                        // Aquí puedes manejar el error, como mostrar un mensaje de error
                    }
                );
            } else {
                // Modo creación
                this.parametroService.guardarGestionesEi(areaFormacion).subscribe(
                    (response: any) => {
                        this.ref?.close();
                        Swal.fire({
                            title: '¡Éxito!',
                            text: 'Los Datos se registraron correctamente',
                            icon: 'success',
                            confirmButtonText: 'Aceptar'
                        }).then(() => {
                            // Aquí puedes agregar lógica adicional después de la creación
                        });
                    },
                    (error: any) => {
                        console.error('Error al guardar el parametro', error);
                        // Aquí puedes manejar el error, como mostrar un mensaje de error
                    }
                );
            }
        } else {
            console.error('Formulario inválido');
            // Aquí puedes manejar el caso de formulario inválido, como mostrar un mensaje de error
        }
    }

    closeModal(event: Event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
        this.ref?.close();
    }
}
