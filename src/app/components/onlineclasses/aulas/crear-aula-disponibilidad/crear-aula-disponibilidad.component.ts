import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { HelpersService } from 'src/app/helpers.service';
import { AulaService } from '../../service/aula.service';

@Component({
  selector: 'app-crear-aula-disponibilidad',
  templateUrl: './crear-aula-disponibilidad.component.html',
  styleUrls: ['./crear-aula-disponibilidad.component.scss']
})
export class CrearAulaDisponibilidadComponent {
  constructor(
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder,
    private spinner:NgxSpinnerService,
    private helpersService:HelpersService,
    private aulaService:AulaService
  ){
    
  }
}
