import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-reg-cursos',
  templateUrl: './reg-cursos.component.html',
  styleUrls: ['./reg-cursos.component.scss']
})
export class RegCursosComponent {



  constructor(private layoutService: LayoutService,
		private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService,
    public ref: DynamicDialogRef,
    private translateService: TranslateService
	) {}








  GuardarCurso(){

  }

  closeModal(){
    this.ref.close({register: false});
  }

}
