import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HelpersService } from 'src/app/helpers.service';
import { ForoService } from '../../../service/foro.service';
@Component({
  selector: 'app-crear-foro-curso',
  templateUrl: './crear-foro-curso.component.html',
  styleUrls: ['./crear-foro-curso.component.scss']
})
export class CrearForoCursoComponent {
  foroForm: FormGroup;
  carreraData: any;
  constructor(
    private ref: DynamicDialogRef,
    private fb: FormBuilder,
    public config: DynamicDialogConfig,
    private helperService: HelpersService,
    private foroService: ForoService
  ) {
    this.foroForm = this.fb.group({
      titulo: [''],
      descripcion: [''],
      fechaInicio: [''],
      fechaFin: ['']
    });
  }
  saveForo() {
    if (this.foroForm.valid) {
      console.log(this.config.data);
      this.ref.close(this.foroForm.value);
      const data = {
        nombre: this.foroForm.get('titulo')?.value,
        descripcion: this.foroForm.get('descripcion')?.value,
        fecha_inicio: this.helperService.formatDate(this.foroForm.get('fechaInicio')?.value),
        fecha_fin: this.helperService.formatDate(this.foroForm.get('fechaFin')?.value),
        id_curso: this.config.data.data.id
      }
      this.foroService.saveForo(data).subscribe((response: any) => {
        console.log(response);
      }
      );
    }
  }
}
