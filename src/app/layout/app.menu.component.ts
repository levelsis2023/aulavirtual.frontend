import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { OptionsDto } from '../seguridad/options-dto';
import { SeguridadService } from '../seguridad/service/seguridad.service';
import { Router, RouterLink } from '@angular/router';
import { PL_TOKEN, VAR_URL } from '../components/onlineclasses/utils/Utils';
import { style } from '@angular/animations';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    optionsDtos: OptionsDto[] = [];
    model: any[] = [];
    menuOpciones: any[] = [];
    authUser: any;
    elementosOcultos: any[] = [];
    lstOpciones: any[] = [];

    constructor(
        public seguridadService: SeguridadService,
        private router: Router
    ) { }
    ngOnInit() {
        this.model = [
            {
                label: 'Plataforma Virtual',
                icon: 'pi pi-building',
                items: [
                    {
                        label: 'Modulo Aula Virtual',
                        icon: 'pi pi-play',
                        items: [
                                {
                                label: 'Configuración',                        
                                icon: 'pi pi-cog',
                                routerLink: ['/pl-virtual/bandeja-instituciones']
                                },
                                {
                                    label: 'Roles',
                                    icon: 'pi pi-users',
                                    routerLink: ['/pl-virtual/bandeja-usuarios']
                                },
                                {
                                    label: 'Mantenimientos',
                                    icon: 'pi pi-wrench',
                                    items: [
                                       
                                        
                                        {
                                            label: 'Maestros',
                                            icon: 'pi pi-send',
                                            routerLink: ['/pl-virtual/parametro-maestro']
                                        },          
                                        
                                       /* {
                                            label: 'Áreas de Formación',
                                            icon: 'pi pi-briefcase',
                                            routerLink: ['/pl-virtual/area-formacion']
                                        },
                                        {
                                            label: 'Unidades Formativas',
                                            icon: 'pi pi-credit-card',
                                            routerLink: ['/pl-virtual/unidades-formativas']
                                        },
                                        {
                                            label: 'Unidades Didácticas',
                                            icon: 'pi pi-envelope',
                                            routerLink: ['/pl-virtual/unidades-didacticas']
                                        },
                                        {
                                            label: 'Estado de Cursos',
                                            icon: 'pi pi-id-card',
                                            routerLink: ['/pl-virtual/estado-cursos']
                                        },
                                        {
                                            label: 'Tipo de Curso',
                                            icon: 'pi pi-inbox',
                                            routerLink: ['/pl-virtual/tipo-curso']
                                        }, */
                                       /* {
                                            label: 'Configuraciones',
                                            icon: 'pi pi-wrench',
                                            routerLink: ['/pl-virtual/configuraciones']
                                        },*/
            
                                    ]
                                   },
                                   {
                                    label: 'Carreras técnicas',
                                    icon: 'pi pi-book',
                                    routerLink: ['/pl-virtual/carrera-tecnica']
                                   },
                                   {
                                    label: 'Alumno',
                                    icon: 'pi pi-users',
                                    items: [
                                        {
                                            label: 'Bandeja',
                                            icon: 'pi pi-bars',
                                            routerLink: ['/pl-virtual/bandeja-alumno']
                                            
                                        },
                                        {
                                            label: 'Datos Personales',
                                            icon: 'pi pi-user-edit',
                                            routerLink: ['/pl-virtual/registro-alumno']
                                        },
                                        {
                                            label: 'Asignaturas',
                                            icon: 'pi pi-fw pi-calendar',
                                            routerLink: ['']
                                        },
                                        
                                        {
                                            label: 'Practicas',
                                            icon: 'pi pi-fw pi-folder',
                                            routerLink: ['/apps/files']
                                        },
                                        {
                                            label: 'Horarios',
                                            icon: 'pi pi-share-alt',
                                            routerLink: ['/apps/calendar']
                                        },
                                        
                                        {
                                            label: 'Foros',
                                            icon: 'pi pi-comment',
                                            routerLink: ['/apps/tasklist']
                                        },
                                        {
                                            label: 'Avance Curricular',
                                            icon: 'pi pi-sitemap',
                                            routerLink: ['/apps/tasklist']
                                        },
                                        {
                                            label: 'Record de pago',
                                            icon: 'pi pi-money-bill',
                                            routerLink: ['/apps/tasklist']
                                        },
                                        {
                                            label: 'Otros cursos',
                                            icon: 'pi pi-shopping-bag',
                                            routerLink: ['/apps/tasklist']
                                        },
                                        {
                                            label: 'Capacitaciones',
                                            icon: 'pi pi-sun',
                                            routerLink: ['/apps/tasklist']
                                        },
    
        
                                    ]
                               },
                               {
                                label: 'Docente',
                                icon: 'pi pi-fw pi-briefcase',
                                items: [
                                    {
                                        label: 'Datos personales',
                                        icon: 'pi pi-file-edit',
                                        routerLink: ['/']
                                        
                                    },
                                    {
                                        label: 'Horarios',
                                        icon: 'pi pi-share-alt',
                                        routerLink: ['/']
                                        
                                    },  
                                    {
                                        label: 'Asignaturas',
                                        icon: 'pi pi-fw pi-calendar',
                                        routerLink: ['/']
                                        
                                    },   
                                    {
                                        label: 'Foros',
                                        icon: 'pi pi-comment',
                                        routerLink: ['/']
                                        
                                    }, 
    
                                ]
                               }
                                ]
                    },
                                
                   
                    
                    
                ]
              }
                   
            
           
        ];
    }




    private configuracionInicial(): void {
        if (window.location.href.includes(VAR_URL) && (localStorage.getItem(PL_TOKEN) === 'invalid' || localStorage.getItem(PL_TOKEN))) {
            let loadUser = decodeURIComponent(window.location.href.split('?')[1]);
            this.seguridadService.LoadUser(loadUser)
                .subscribe({
                    next: (modelResponse: any) => {
                        console.log('modelResponse', modelResponse);
                        this.lstOpciones.push(modelResponse.data.options);
                        localStorage.setItem(PL_TOKEN, loadUser);
                        localStorage.setItem('consejo-idPersona', modelResponse.data.idPersona);
                        localStorage.setItem('consejo-correo', modelResponse.data.correo);
                        localStorage.setItem('consejo-name', modelResponse.data.name);
                        localStorage.setItem('consejo-username', modelResponse.data.username);
                        localStorage.setItem('consejo-perfil', modelResponse.data.perfil);
                        localStorage.setItem('consejo-opciones', JSON.stringify(modelResponse.data.options));
                    },
                    error: (errorResponse: any) => {
                        console.log('LoadUser:observable subscribe error', errorResponse);

                    },
                    complete: () => {
                        this.router.navigate(['/consejo-directivo']);
                       // console.log("this.LoadUser complete");
                    }
                })
        }
    }
}
