import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regitro-instituciones',
  templateUrl: './regitro-instituciones.component.html',
  styleUrls: ['./regitro-instituciones.component.scss']
})
export class RegitroInstitucionesComponent {

constructor(private router: Router){

}




  regresar(){
    this.router.navigate(['/pl-virtual/bandeja-instituciones']);
  }

}
