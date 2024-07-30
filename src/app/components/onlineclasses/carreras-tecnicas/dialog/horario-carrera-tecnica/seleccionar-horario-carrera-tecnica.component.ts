import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { HorarioService } from 'src/app/components/onlineclasses/service/horario.service';
@Component({
  selector: 'app-seleccionar-horario-carrera-tecnica',
  templateUrl: './seleccionar-horario-carrera-tecnica.component.html',
  styleUrls: ['./seleccionar-horario-carrera-tecnica.component.scss']
})
export class SeleccionarHorarioCarreraTecnicaComponent {
  loading: boolean = false;
  parametroForm: FormGroup;
  curso: any;
  deselectedHorarios: any[] = [];
  days = [
    { name: 'Lunes', value: 1, inicio: '', fin: '', selected: false,id:-1 },
    { name: 'Martes', value: 2, inicio: '', fin: '', selected: false,id:-1 },
    { name: 'Miércoles', value: 3, inicio: '', fin: '', selected: false,id:-1 },
    { name: 'Jueves', value: 4, inicio: '', fin: '', selected: false,id:-1 },
    { name: 'Viernes', value: 5, inicio: '', fin: '', selected: false,id:-1 },
    { name: 'Sábado', value: 6, inicio: '', fin: '', selected: false,id:-1 },
    { name: 'Domingo', value: 7, inicio: '', fin: '', selected: false,id:-1 }
  ];

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private horarioService: HorarioService
  ) {
    this.curso = this.config.data.data;
    this.parametroForm = this.fb.group({
      domain_id: [1],
      days: this.fb.array(this.days.map(day => this.createDayGroup(day))),
      fechaInicio:[''],
      fechaFin:['']
    });
    this.getHorario(this.curso.id);
  }

  createDayGroup(day: any): FormGroup {
    return this.fb.group({
      name: [day.name],
      value: [day.value],
      inicio: [day.inicio, Validators.required],
      fin: [day.fin, Validators.required],
      selected: [day.selected],
      id: [day.id]
    });
  }

  get daysFormArray(): FormArray {
    return this.parametroForm.get('days') as FormArray;
  }
  getDayGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  } 
  selectDay(day: any) {
    const index = this.days.findIndex(d => d.value === day.value);
    if (index !== -1) {
      const formGroup = this.daysFormArray.at(index) as FormGroup;
      const isSelected = !formGroup.get('selected')?.value;
      formGroup.patchValue({
        selected: isSelected,
        inicio: isSelected ? '08:00' : '',
        fin: isSelected ? '09:00' : ''
      });
    const idDay=this.days[index].id;
    if(!isSelected){
      this.deselectedHorarios.push(idDay);
    }
  }
  }
  getHorario(idCurso:number){
    this.horarioService.getHorario(idCurso).subscribe(
      (response: any) => {
        const horarios = response;
        let fechaInicio: Date | null = null;
        let fechaFin: Date | null = null;
        this.days.forEach((day: any) => {
          const horario = horarios.find((h: any) => h.day_id == day.value);
          if (horario) {
            day.selected = true;
            day.inicio = horario.hora_inicio;
            day.fin = horario.hora_fin;
            day.id = horario.id;
            if (!fechaInicio || new Date(horario.fecha_inicio) < fechaInicio) {
              fechaInicio = new Date(horario.fecha_inicio);
            }
            if (!fechaFin || new Date(horario.fecha_fin) > fechaFin) {
              fechaFin = new Date(horario.fecha_fin);
            }

          }
        });
        this.daysFormArray.patchValue(this.days);
        //formatear 2024-07-30 para input type date
        
       
        if (fechaInicio) {
          this.parametroForm.patchValue({ fechaInicio: this.formatDate(fechaInicio) });
        }
        if (fechaFin) {
          this.parametroForm.patchValue({ fechaFin: this.formatDate(fechaFin) });
        }
        
      },
      (error: any) => {
        console.error('Error al obtener el horario', error);
      }
    );
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  saveHorario() {
      const horarios = this.parametroForm.value.days.filter((day: any) => day.selected);
      const data={
        curso_id: this.curso.id,
        domain_id: 1,
        docente_id: 1,
        horarios,
        deselectedHorarios: this.deselectedHorarios,
        fechaInicio: this.parametroForm.value.fechaInicio,
        fechaFin: this.parametroForm.value.fechaFin
      }
      this.horarioService.saveHorario(data).subscribe(
        (response: any) => {
          console.log('Horario guardado', response);
          this.ref?.close();
        },
        (error: any) => {
          console.error('Error al guardar el horario', error);
          this.ref?.close();

        }
        
      );
    
    this.loading = true;
    
  }

  closeModal(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    this.ref?.close();
  }
}
