import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GeneralService } from '../../../service/general.service';
import Swal from 'sweetalert2';
import { HelpersService } from 'src/app/helpers.service';
import { CommonService } from '../../../service/common.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-reg-cursos',
  templateUrl: './reg-cursos.component.html',
  styleUrls: ['./reg-cursos.component.scss']
})
export class RegCursosComponent implements OnInit, AfterViewInit {


  id: number = 0;
  cantidadTotalCreditos: number = 0;
  codigo: string = '';
  nombreCurso: string = '';
  ciclo: any = {};
  ciclos: any[] = [];
  areaFormacion: any = {};
  areasFormacion: any[] = [];
  moduloFormativo: any = {};
  modulosFormativos: any[] = [];
  cantidadCreditos: number = 0;
  porcentajeCreditos: number = 0;
  cantidadHoras: number = 0;
  syllabus: string | undefined = '';
  tema: string | undefined = '';
  asignacionDocentes: any = {};
  asignacionesDocentes: any[] = [];
  estados: any[] = [];
  estado: any = {};
  acciones: string = '';
  domain_id=1;

  subscriptions: Subscription[] = [];
  curso: any = {};

  constructor(
    public ref: DynamicDialogRef,
    private parametroService: GeneralService,
    public config: DynamicDialogConfig,
    public helperService: HelpersService,
    private commonService:CommonService
  ) {
  }

  ngOnInit(): void {
    this.id = this.config.data.id;
    this.cantidadTotalCreditos = this.config.data.total_creditos;
    this.acciones = this.config.data.acciones;
    this.domain_id = this.helperService.getDominioId();

      Promise.all([
          this.obtenerDatosCurso(this.config.data.data.id),
          this.listarModulosFormativos(),
          this.listarAreasFormacion(),
          this.listarCiclos(),
          this.listarEstados(),
          this.listarDocentes(this.domain_id )
      ]).then(() => {
          if (this.config.data.acciones === 'editar' || this.config.data.acciones === 'ver') {
              console.log(this.config.data.data);
              this.codigo = this.curso.codigo;
              this.nombreCurso = this.curso.nombre;
              this.ciclo = this.curso.ciclo_id;
              this.areaFormacion = this.curso.area_de_formacion_id;
              this.moduloFormativo = this.curso.modulo_formativo_id;
              this.cantidadCreditos = this.curso.cantidad_de_creditos;
              this.porcentajeCreditos = this.curso.porcentaje_de_creditos;
              this.cantidadHoras = this.curso.cantidad_de_horas;
              this.syllabus = this.curso.syllabus;
              this.tema = this.curso.tema;
              this.asignacionDocentes =this.curso.docente_id;
              this.estado = this.curso.estado_id;
          }
      });
  }

  ngAfterViewInit(): void {

  }

    GuardarCurso(): void {
    console.log(this.asignacionDocentes)
    const curso = {
      codigo: this.codigo,
      nombreCurso: this.nombreCurso,
      cicloId: this.ciclo,
      areaFormacionId: this.areaFormacion,
      moduloFormativoId: this.moduloFormativo,
      cantidadCreditos: this.cantidadCreditos,
      porcentajeCreditos: this.porcentajeCreditos,
      cantidadHoras: this.cantidadHoras,
      syllabus: this.syllabus,
      tema: this.tema,
      asignacionDocentesId: this.asignacionDocentes,
      carreraId: this.id,
      estadoId: this.estado,
      domain_id: this.domain_id
    };


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
  editarCurso(): void {
    const curso = {
      codigo: this.codigo,
      nombreCurso: this.nombreCurso,
      cicloId: this.ciclo,
      areaFormacionId: this.areaFormacion,
      moduloFormativoId: this.moduloFormativo,
      cantidadCreditos: this.cantidadCreditos,
      porcentajeCreditos: this.porcentajeCreditos,
      cantidadHoras: this.cantidadHoras,
      syllabus: this.syllabus,
      tema: this.tema,
      asignacionDocentesId: this.asignacionDocentes?.code,
      carreraId: this.id,
      estadoId: this.estado,
      cursoId: this.config.data.data.id,
      domain_id: this.domain_id

    };

    console.log('Curso a guardar', curso);

    if (curso) {
      this.parametroService.actualizarCurso(curso).subscribe(
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

  obtenerDatosCurso(id: number): Promise<void> {
      console.log("Id curso:", id);
      return new Promise((resolve, reject) => {
          this.parametroService.getCursoById(id).subscribe(
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

  listarModulosFormativos(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.parametroService.getModulosFormativos().subscribe(
        (response: any) => {
          console.log("Lista de listarModulosFormativos", response);
          this.modulosFormativos = response;
          resolve();
        },
        (error: any) => reject(error)
      );
    });
  }

  listarAreasFormacion(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.parametroService.getAreasDeFormacion().subscribe(
        (response: any) => {
          console.log("Lista de listarAreasFormacion", response);
          this.areasFormacion = response;
          resolve();
        },
        (error: any) => reject(error)
      );
    });
  }

  listarCiclos(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.parametroService.getCiclos().subscribe(
        (response: any) => {
          console.log("Lista de listarCiclos", response);
          this.ciclos = response;
          resolve();
        },
        (error: any) => reject(error)
      );
    });
  }

  listarEstados(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.parametroService.getEstadoDeCurso().subscribe(
        (response: any) => {
          console.log("Lista de listarEstados", response);
          this.estados = response;
          resolve();
        },
        (error: any) => reject(error)
      );
    });
  }
  listarDocentes(domain_id:any): Promise<void> {
    return new Promise((resolve, reject) => {
      this.commonService.getDocentesDropdown(this.domain_id).subscribe(
        (response: any) => {
          console.log("Lista de listarDocentes", response);
          this.asignacionesDocentes= response.map((item: any) => {
            return {
              label: item.nombres,
              value: item.id
            }
          });
          resolve();
        },
        (error: any) => reject(error)
      );
    });
  }

  closeModal() {
    this.ref.close({ register: false });
  }


    syllabusChange(event: any): void{
      console.log(event);
    }
}
