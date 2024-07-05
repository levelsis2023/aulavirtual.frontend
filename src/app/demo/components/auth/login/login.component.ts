import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { environment } from 'src/app/environment/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface tiporol {
    name: string;
	value: number;
    code: string;
}

@Component({
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

	rememberMe: boolean = false;
    tiporoles!: tiporol[];
    rol: tiporol | undefined;
    email: string = '';
    password: string = '';

	constructor(private layoutService: LayoutService,
		private router: Router
	) {}



	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

ngOnInit(){

	this.tiporoles = [
		{ name: 'Alumno', value:1, code: 'NY' },
		{ name: 'Administrador', value:2, code: 'RM' },
		{ name: 'Docente', value:3, code: 'LDN' },
		
	];



}


irAlLogin() {
	if (this.rol && this.email.trim() && this.password.trim()) {
		Swal.fire({
			title: '¡Éxito!',
			text: 'Datos correctos',
			icon: 'success',
			confirmButtonText: 'Aceptar',
		}).then(() => {
			this.router.navigate(['/pl-virtual']);
		});
	} else {
		Swal.fire({
			title: '¡Error!',
			text: 'Revisa los datos ingresados',
			icon: 'error',
			confirmButtonText: 'Aceptar',
		});
	}
}

}
