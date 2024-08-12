import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig} from 'primeng/api';
import { Router } from '@angular/router';
import {ToastGlobalService} from "./seguridad/service/toast-global.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {

    constructor(
        private primengConfig: PrimeNGConfig,
        private router: Router,
        private messageService: MessageService,
        private toastGlobalService: ToastGlobalService
    ) { }

    ngOnInit(): void {

        this.primengConfig.ripple = true;
        console.log('app.component.ts');
        if (this.checkUserIsLogged() ) {


        } else {
            this.router.navigate(['/auth/login']);
        }

    }

    ngAfterViewInit() {
        this.toastGlobalService.toast.subscribe((res) =>{
            console.log('Añadir toast');
            this.messageService.add(res);
        });

        // this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
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
