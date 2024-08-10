import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HelpersService } from 'src/app/helpers.service';
import { AulaService } from '../../service/aula.service';

@Component({
  selector: 'app-crear-aula-component',
  templateUrl: './crear-aula-component.component.html',
  styleUrls: ['./crear-aula-component.component.scss']
})
export class CrearAulaComponentComponent {
  aulaForm:FormGroup;
  domain_id:number;
  loading:boolean=false;
  constructor(
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder,
    private spinner:NgxSpinnerService,
    private helpersService:HelpersService,
    private aulaService:AulaService
  ) { 
    this.aulaForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
    });
    this.domain_id=this.helpersService.getDominioId();
  }
  ngOnInit(): void {
    this.loadAulaData();
  }
  loadAulaData(){
    console.log(this.config.data);
    let data = this.config.data;
    if(data){
      this.aulaForm.get('nombre')?.setValue(data.nombre);
      this.aulaForm.get('direccion')?.setValue(data.descripcion);
    }
  }
  saveForm(){
    this.spinner.show();
    this.loading=true;
    let data = {
      nombre: this.aulaForm.get('nombre')?.value,
      direccion: this.aulaForm.get('direccion')?.value,
      dominio_id: this.domain_id,
      id: this.config.data ? this.config.data.id : null
    };
    this.aulaService.saveAula(data).subscribe((res:any)=>{
      if(res.status){
        this.spinner.hide();
        this.helpersService.showSuccessMessage(res.message);
        this.loading=false;
        this.ref.close(res);
      }
    
    },(error)=>{
      this.helpersService.showErrorMessage(error.error.message);
      this.spinner.hide();
      this.loading=false;
      console.log(error);
    });
    
  }
}
