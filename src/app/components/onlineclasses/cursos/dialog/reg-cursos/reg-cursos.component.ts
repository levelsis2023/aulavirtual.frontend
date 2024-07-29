import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { GeneralService } from '../../../service/general.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-cursos',
  templateUrl: './reg-cursos.component.html',
  styleUrls: ['./reg-cursos.component.scss']
})
export class RegCursosComponent implements OnInit {
  id: number = 0;
  cantidadTotalCreditos: number = 0;
  codigo: string = '';
  nombreCurso: string = '';
  ciclo: any = null;
  ciclos: any[] = [];
  areaFormacion: any = null;
  areasFormacion: any[] = [];
  moduloFormativo: any = null;
  modulosFormativos: any[] = [];
  cantidadCreditos: number = 0;
  porcentajeCreditos: number = 0;
  cantidadHoras: number = 0;
  syllabus: string = '';
  asignacionDocentes: any = null;
  asignacionesDocentes: any[] = [];
  estados: any[] = [];
  estado: any = null;

  constructor(
    private layoutService: LayoutService,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService,
    public ref: DynamicDialogRef,
    private translateService: TranslateService,
    private parametroService: GeneralService,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.id = this.config.data.id;
    this.cantidadTotalCreditos = this.config.data.total_creditos;
    this.listarModulosFormativos();
    this.listarAreasFormacion();
    this.listarCiclos();
    this.listarEstados();
  }

  GuardarCurso(): void {
    const curso = {
      codigo: this.codigo,
      nombreCurso: this.nombreCurso,
      cicloId: this.ciclo?.nu_id_parametro,
      areaFormacionId: this.areaFormacion?.nu_id_parametro,
      moduloFormativoId: this.moduloFormativo?.nu_id_parametro,
      cantidadCreditos: this.cantidadCreditos,
      porcentajeCreditos: this.porcentajeCreditos,
      cantidadHoras: this.cantidadHoras,
      syllabus: this.syllabus,
      asignacionDocentesId: this.asignacionDocentes?.code,
      carreraId: this.id,
      estadoId: this.estado?.nu_id_parametro
    };

    console.log('Curso a guardar', curso);

    if (curso) {
      this.parametroService.guardarCurso(curso).subscribe(
        (response: any) => {
          this.closeModal();
          Swal.fire({
            title: '¡Éxito!',
            text: 'Los Datos se registraron correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {});
        },
        (error: any) => {
          console.error('Error al guardar el parametro', error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }

  onCantidadCreditosChange(newValue: number) {
    if (this.cantidadTotalCreditos === 0 || this.cantidadTotalCreditos == null) {
      this.porcentajeCreditos = 100;
    } else {
      console.log('Cantidad de créditos ha cambiado:', newValue);
      console.log('Cantidad total de créditos:', this.cantidadTotalCreditos);
      const resultado = (newValue / this.cantidadTotalCreditos) * 100;
      this.porcentajeCreditos = resultado;
      console.log('Resultado del cálculo:', resultado);
    }
  }

  listarModulosFormativos(): void {
    this.parametroService.getModuloFormativo().subscribe((response: any) => {
      console.log("Lista de listarModulosFormativos", response);
      this.modulosFormativos = response;
    });
  }

  listarAreasFormacion(): void {
    this.parametroService.getAreaDeFormacion().subscribe((response: any) => {
      console.log("Lista de listarAreasFormacion", response);
      this.areasFormacion = response;
    });
  }

  listarCiclos(): void {
    this.parametroService.getCiclo().subscribe((response: any) => {
      console.log("Lista de listarCiclos", response);
      this.ciclos = response;
    });
  }

  listarEstados(): void {
    this.parametroService.getEstados().subscribe((response: any) => {
      console.log("Lista de listarEstados", response);
      this.estados = response;
    });
  }

  closeModal() {
    this.ref.close({ register: false });
  }
}