import { ChangeDetectorRef, Component } from '@angular/core';
import { Parametro } from '../../../interface/general';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';
import { GeneralService } from '../../../service/general.service';

@Component({
  selector: 'app-reg-maestros',
  templateUrl: './reg-maestros.component.html',
  styleUrls: ['./reg-maestros.component.scss']
})

export class RegMaestrosComponent {

  loading: boolean = false;
  parametroDatos: Parametro = new Parametro();
  parametro: Parametro = new Parametro;
  parametroGroupItemList: Parametro[] = [];
  itemSeleccionado?: Parametro | null;
  acciones: string = 'register';
  mycheckbox: boolean = false;
  esNuevo: boolean = false;
  descripcionParametro:string|null = null;
  valorIdPersona: any;
  
  constructor(
    private ref: DynamicDialogRef,
    private cdr: ChangeDetectorRef,
    public config: DynamicDialogConfig,   
    private parametroService: GeneralService

) {
    
}

  ngOnInit() {
    this.inicializar();
    if (this.acciones == 'edit'){
        this.descripcionParametro =this.parametroDatos.txItemDescripcion;
        setTimeout(() => {
            this.itemSeleccionado = this.parametroGroupItemList.find((parametro:Parametro) => parametro.nuItemNro === this.parametroDatos.nuItemNro) ?? ({} as Parametro);
        }, 1700);
    }

    this.valorIdPersona = localStorage.getItem("consejo-idPersona");
    console.log("iduser:", this.valorIdPersona)
}

inicializar() {
    this.listarPedidosGroupItem();

}

listarPedidosGroupItem(): void {
    this.parametroService.listarmiembros()
        .subscribe((resp: any) => {
            this.parametroGroupItemList = this.numeracion(resp.response);
        });
}





  selecionarParametroItem(){
    this.parametroDatos.txNombre = null;
    this.parametroDatos.txAbreviatura = null;
    this.parametroDatos.nuItemNro = null;
    if (this.itemSeleccionado && this.acciones == 'register')
        this.parametroDatos = this.itemSeleccionado;
    if (this.acciones == 'edit') {
        this.parametroDatos.txNombre = this.itemSeleccionado?.txNombre? this.itemSeleccionado?.txNombre: null;
        this.parametroDatos.txAbreviatura = this.itemSeleccionado?.txAbreviatura? this.itemSeleccionado?.txAbreviatura: null;
        this.parametroDatos.nuItemNro = this.itemSeleccionado?.nuItemNro? this.itemSeleccionado?.nuItemNro: null;
        this.parametroDatos.txUseCreado = this.valorIdPersona;
    }
}
private numeracion(midata: any | any[]) {
    for (let i = 0; i < midata.length; i++) {
        midata[i].numeracion = ((i + 1));//+(this.page*this.size));
        midata[i].feFechaAtencion1 = new Date(midata[i].feFechaAtencion);//+(this.page*this.size));

    }
    return midata;
}

guardarParametro(){

}

updateParametros(){

}

closeModal(){
  this.ref.close({register: false});
}


reject(){

}

accept(){

}
}
