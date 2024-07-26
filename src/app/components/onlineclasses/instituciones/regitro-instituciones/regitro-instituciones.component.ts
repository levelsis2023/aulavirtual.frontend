import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RegistroInstitucionesService } from '@services/instituciones/registro-instituciones.service';

@Component({
  selector: 'app-regitro-instituciones',
  templateUrl: './regitro-instituciones.component.html',
  styleUrls: ['./regitro-instituciones.component.scss']
})
export class RegitroInstitucionesComponent implements OnInit{

  institucionForm: FormGroup;
  id: number | null = null;
  isEditing: boolean = false;
  formTitle: string = 'Registrar Institución';
  submitButtonLabel: string = 'Guardar';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private registroInstitucionesServic: RegistroInstitucionesService
  ){
    this.institucionForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(191)]],
      director: ['', [Validators.required, Validators.maxLength(191)]],
      siglas: ['', [Validators.required, Validators.maxLength(191)]],
      logotipo: ['', Validators.required],
      color_fondo: ['', [Validators.required, Validators.maxLength(20)]],
      color_texto: ['', [Validators.required, Validators.maxLength(20)]]
    });

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEditing = true;
      this.formTitle = 'Actualizar Institución';
      this.submitButtonLabel = 'Actualizar';
      this.registroInstitucionesServic.obtener(this.id).subscribe(data => {
        this.institucionForm.patchValue(data);
      });
    }
  }

  guardar():void{

    if (this.institucionForm.valid) {

      if (this.isEditing && this.id !== null) {
        this.registroInstitucionesServic.actualizar(this.id, this.institucionForm.value).subscribe(
          {
            next: (data) => {
                this.institucionForm.reset();
                this.router.navigate(['/pl-virtual/bandeja-instituciones']);
            },
            error: (e) => {
                console.log(e);
            },
          }
        );
      } else {
        this.registroInstitucionesServic.guardar(this.institucionForm.value).subscribe(
          {
            next: (data) => {
                this.institucionForm.reset();
                this.router.navigate(['/pl-virtual/bandeja-instituciones']);
            },
            error: (e) => {
                console.log(e);
            },
          }
        );
      }

    }else {
      this.institucionForm.markAllAsTouched(); // Marca todos los campos para mostrar errores
    }

  }

  regresar(){
    this.institucionForm.reset();
    this.router.navigate(['/pl-virtual/bandeja-instituciones']);
  }

}
