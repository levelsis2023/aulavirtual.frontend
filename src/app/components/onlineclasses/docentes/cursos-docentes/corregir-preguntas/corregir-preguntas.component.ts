import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import { CorregirPreguntasUnicaComponent } from './corregir-preguntas-unica.component';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-corregir-preguntas',
  templateUrl: './corregir-preguntas.component.html',
  styleUrls: ['./corregir-preguntas.component.scss']
})
export class CorregirPreguntasComponent implements OnInit {

  loading: boolean = false;
  carrerastecnicasList: any[] = [];
  originalCarrerastecnicasList: any[] = [];
  ref: DynamicDialogRef | undefined;
  docenteId: any;

  constructor(
    private dialogService: DialogService,
    private cursosService: GeneralService,
    public config: DynamicDialogConfig,
  ) { }

  ngOnInit(): void {
    console.log(this.config.data.data);
    // Obtener el objeto 'user' del localStorage
    const user = localStorage.getItem('user');

    // Verificar si el objeto existe en el localStorage
    if (user) {
      // Parsear el objeto JSON
      const userObj = JSON.parse(user);

      // Acceder a la propiedad docente_id
      this.docenteId = userObj.docente_id || 8;
    } else {
      console.error('No se encontró el objeto user en el localStorage');
    }

    this.listarPreguntasParaCorregir();
  }

  listarPreguntasParaCorregir() {
    this.cursosService.getListadoDePreguntasPorCorregir(this.config.data.data.id).subscribe((response: any) => {
      this.carrerastecnicasList = response;
      this.originalCarrerastecnicasList = [...response];
    });
  }

  corregirPregunta(curso: any) {
    this.ref = this.dialogService.open(CorregirPreguntasUnicaComponent, {
      width: '60%',
      styleClass: 'custom-dialog-header',
      data: { data: curso.pregunta, acciones: 'docente' }
    });

    this.ref.onClose.subscribe(() => {
      this.listarPreguntasParaCorregir();
    });
  }
}