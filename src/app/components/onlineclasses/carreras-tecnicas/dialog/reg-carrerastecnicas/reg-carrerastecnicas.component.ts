import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import { Parametro } from '../../../interface/general';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';	
import { HelpersService } from 'src/app/helpers.service';

@Component({
  selector: 'app-reg-carrerastecnicas',
  templateUrl: './reg-carrerastecnicas.component.html',
  styleUrls: ['./reg-carrerastecnicas.component.scss']
})
export class RegCarrerastecnicasComponent {

  loading: boolean = false;
  parametroDatos: Parametro = new Parametro();
  parametro: Parametro = new Parametro();
  mostrarCursos = false;
  parametroForm: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    private cdr: ChangeDetectorRef,
    public config: DynamicDialogConfig,   
    private parametroService: GeneralService,
    private router: Router,
    private helpersService: HelpersService,
  ) {
    this.parametroForm = this.fb.group({
      codigo: ['', Validators.required],
      nombres: ['', Validators.required],
      domain_id: [this.helpersService.getDominioId()],
    });

  }

  guardarParametro() {
    if (this.parametroForm.valid) {
      console.log('Formulario válido', this.parametroForm.value);
      this.parametroService.guardarCarreraTecnica(this.parametroForm.value).subscribe(
        (response: any) => {
          this.ref?.close();
          Swal.fire({
            title: '¡Éxito!',
            text: 'Los Datos se registraron correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            
          });
        },
        (error: any) => {
          console.error('Error al guardar el parametro', error);
          // Aquí puedes manejar el error, como mostrar un mensaje de error
        }
      );
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