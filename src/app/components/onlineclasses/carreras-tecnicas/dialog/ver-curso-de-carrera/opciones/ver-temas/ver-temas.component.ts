import { Component, OnInit} from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { HelpersService } from 'src/app/helpers.service';
import {Subscription} from "rxjs";
import {GeneralService} from "../../../../../service/general.service";

@Component({
  selector: 'app-ver-temas',
  templateUrl: './ver-temas.component.html',
  styleUrls: ['./ver-temas.component.scss']
})
export class VerTemasComponent implements OnInit{


  idCurso: number = 0;
  contenido: string = '';
  domain_id=1;

  subscriptions: Subscription[] = [];
  curso: any = {};
    modules = {
        "toolbar": false
    }

  constructor(
    public ref: DynamicDialogRef,
    private parametroService: GeneralService,
    public config: DynamicDialogConfig,
    public helperService: HelpersService
  ) {
  }

  ngOnInit(): void {
    this.idCurso = this.config.data.cursoId;

      Promise.all([
          this.obtenerTema(this.idCurso),
      ]).then(() => {
          this.contenido = this.curso.tema;
      });
  }

    obtenerTema(id: number): Promise<void> {
      return new Promise((resolve, reject) => {
          this.parametroService.getTemaByCurso(id).subscribe(
              (response: any) => {
                  console.log("Datos Curso", response.Datos);
                  this.curso = response.Datos;
                  //this.modulosFormativos = response;
                  resolve();
              },
              (error: any) => reject(error)
          );
      });
  }

  closeModal() {
    this.ref.close({ register: false });
  }

}
