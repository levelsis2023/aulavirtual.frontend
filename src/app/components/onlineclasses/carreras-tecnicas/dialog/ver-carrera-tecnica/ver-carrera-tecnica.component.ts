import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Parametro } from '../../../interface/general';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ver-carrera-tecnica',
  templateUrl: './ver-carrera-tecnica.component.html',
  styleUrls: ['./ver-carrera-tecnica.component.scss']
})
export class VerCarreraTecnicaComponent {

  loading: boolean = false;
  parametroDatos: Parametro = new Parametro();
  parametro: Parametro = new Parametro();
  mostrarCursos = false;
  parametroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,   
  ) {
    this.parametroForm = this.fb.group({
      codigo: [{ value: this.config.data.data.codigo, disabled: true }, Validators.required],
      nombres: [{ value: this.config.data.data.nombres, disabled: true }, Validators.required],
      domain_id: [{ value: 1, disabled: true }],
      id: [{ value: this.config.data.data.id, disabled: true }]
    });
  }

  closeModal(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    this.ref?.close();
  }
}