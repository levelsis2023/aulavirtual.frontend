import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import esLocale from '@fullcalendar/core/locales/es'
import Swal from 'sweetalert2';	
import { DynamicDialogRef } from 'primeng/dynamicdialog'
import { CommonService } from '../../../service/common.service';
import { UsuarioService } from '../../../service/usuario.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';


interface carreras {
  name: string;
  value: number;
  code: string;
}

interface Cantciclos {
  name: string;
  value: number;
  code: string;
}

interface modellistareaformativa {
  name: string;
  value: number;
  code: string;
}

interface modellistadocente {
  name: string;
  value: number;
  code: string;
}

@Component({
  selector: 'app-registra-usuario',
  templateUrl: './registra-usuario.component.html',
  styleUrls: ['./registra-usuario.component.scss'],

})
export class RegistraUsuarioComponent {
  
  listcarrera!: carreras[];
  seleccarrera: carreras | undefined;
  
  listciclos!: Cantciclos[];
  selecciclos: Cantciclos  | undefined;

  listareaformativa!: modellistareaformativa[];
  selectunidadfromativa: modellistareaformativa | undefined;

  lsitadocente!: modellistadocente[];
  selectdocente:modellistadocente | undefined;
  
  contsylabus: string ='';

  fechanacimiento!: Date | null;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: esLocale,
     };
 

  dialogVisible: boolean = false; 
  visible: boolean = false;
  userForm: FormGroup;
	constructor(private layoutService: LayoutService,
		private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService,
    public ref: DynamicDialogRef,
    private translateService: TranslateService,
    private commonService: CommonService,
    private userServicio: UsuarioService,
    private fb:FormBuilder,
	) {
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',Validators.required],
      dni: ['',Validators.required],
      rolId: ['',Validators.required],
  
    });
  }

ngOnInit(){
  
	this.listciclos = [
	
	
	]
  this.listcarrera = [
		{ name: 'DNI', value:1, code: 'NY' },
		{ name: 'PASAPORTE', value:2, code: 'RM' }
    	
	];

  this.listareaformativa = [
		{ name: 'Área de formación 1', value:1, code: 'NY' },
		{ name: 'Área de formación 2', value:2, code: 'RM' },
    { name: 'Área de formación 3', value:2, code: 'RM' } 
		
	];
  this.lsitadocente = [
		{ name: 'Docente 1', value:1, code: 'NY' },
		{ name: 'Docente 2', value:2, code: 'RM' },
    { name: 'Docente 3', value:2, code: 'RM' } 
		
	];

  if (this.translate) {
    this.translateChange('es'); // Cambia a español como ejemplo
  } else {
    console.error('TranslateService is not initialized.');
  }
  this.getRolesDropdown();

   }
  
  cambiarIdioma() {
    this.translateService.use('es');
  }
  getRolesDropdown() {
    this.commonService.getRolesDropdown().subscribe(
        (response:any) => {
            this.listciclos = response.map((rol: any) => {
                return {
                    name: rol.nombre,
                    value: rol.id,
                };
            });
        },
        (error) => {
            console.error('Error obteniendo carreras', error);
        }
    );
}
  translateChange(lang: string): void {
    if (this.translate) {
      this.translate.use(lang);
    } else {
      console.error('TranslateService is not initialized.');
    }
  }

   onDropdownChangetipoDni(event: any): void {
    // Lógica para manejar el cambio en el dropdown
    console.log('Dropdown value changed:', event);
    
  }

  saveUsuario() {
    console.log('saveUsuario', this.userForm.value);
      if(this.userForm.valid){
        const formData=new FormData();
        formData.append('name',this.userForm.get('name')?.value+""+this.userForm.get('lastname')?.value);
        formData.append('email',this.userForm.get('email')?.value);
        formData.append('dni',this.userForm.get('dni')?.value);
        formData.append('rol_id',this.userForm.get('rolId')?.value);
        this.userServicio.saveUsuario(formData).subscribe(
          (response) => {
              console.log('response', response);
              Swal.fire({
                title: 'Usuario registrado',
                text: 'El usuario se ha registrado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar',
              });
              this.ref.close({register: true});
          },
          (error) => {
              console.error('Error registrando usuario', error);
              Swal.fire({
                title: 'Error',
                text: 'Ha ocurrido un error al registrar el usuario',
                icon: 'error',
                confirmButtonText: 'Aceptar',
              });
          }
      );
      }
    }
  
closeDialog() {
      this.visible = false;
  }


  closeModal(){
    this.ref.close({register: false});
  }
}
