import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profilemenu',
    templateUrl: './app.profilesidebar.component.html'
})
export class AppProfileSidebarComponent {

    nombreUser: string ="HAROLD JAMS CARRILLO";

    constructor(public layoutService: LayoutService,
        private router: Router,
    ) { }

    get visible(): boolean {
        return this.layoutService.state.profileSidebarVisible;
    }

    set visible(_val: boolean) {
        this.layoutService.state.profileSidebarVisible = _val;
    }


    cerrarSesion(){
        console.log('Cerrando sesión...');
        this.router.navigate(['/auth/login']);
    }
}