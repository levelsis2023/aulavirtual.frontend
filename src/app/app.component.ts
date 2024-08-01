import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig
        , private router: Router
    ) { }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
        console.log('app.component.ts');
        if (this.checkUserIsLogged() ) {
            

        } else {
            this.router.navigate(['/auth/login']);
        }


    }
    getCurrentRoute() {
        return this.router.url;
    }
    checkUserIsLogged() {
        if (localStorage.getItem('user')) {
            return true;
        }
        return false;
    }
}