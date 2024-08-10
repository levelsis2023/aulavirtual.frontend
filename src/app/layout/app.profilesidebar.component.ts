import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Router } from '@angular/router';
import { HelpersService } from '../helpers.service';
import { GeneralService } from '../components/onlineclasses/service/general.service';

@Component({
    selector: 'app-profilemenu',
    templateUrl: './app.profilesidebar.component.html'
})
export class AppProfileSidebarComponent {

    nombreUser: string ="HAROLD JAMS CARRILLO";
    domain_id: any;
    logoUrl: any;

    constructor(public layoutService: LayoutService,
        private router: Router,

    ) { 
        if(localStorage.getItem('user')){
            this.nombreUser = JSON.parse(localStorage.getItem('user') || '{}').name
        }
        
        
    }

    get visible(): boolean {
        return this.layoutService.state.profileSidebarVisible;
    }

    set visible(_val: boolean) {
        this.layoutService.state.profileSidebarVisible = _val;
    }


    cerrarSesion(){
        if(localStorage.getItem('user')){
            localStorage.removeItem('user');
            this.router.navigate(['/auth/login']);
        }
    }
}