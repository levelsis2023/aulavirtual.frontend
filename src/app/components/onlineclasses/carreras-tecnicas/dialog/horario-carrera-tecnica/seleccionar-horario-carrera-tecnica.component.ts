import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HorarioService } from 'src/app/components/onlineclasses/service/horario.service';
import { AulaService } from 'src/app/components/onlineclasses/service/aula.service';
import { HelpersService } from 'src/app/helpers.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-seleccionar-horario-carrera-tecnica',
  templateUrl: './seleccionar-horario-carrera-tecnica.component.html',
  styleUrls: ['./seleccionar-horario-carrera-tecnica.component.scss']
})
export class SeleccionarHorarioCarreraTecnicaComponent implements OnInit {
  loading: boolean = false;
  parametroForm: FormGroup;
  curso: any;
  aulas: any[] = [];
  aulaDisponibilidad: any[] = [];
  cursoHorarios: any[] = [];
  domain_id: number = 1; // Ajusta según necesidades
  calendarOptions: CalendarOptions;
  showReplicateDialog: boolean = false;
  selectedEvent: any;

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private horarioService: HorarioService,
    private aulaService: AulaService,
    private helpersService: HelpersService
  ) {
    this.domain_id = this.helpersService.getDominioId();
    this.curso = this.config.data.data;
    this.parametroForm = this.fb.group({
      aula_id: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this)
    };
  }

  ngOnInit() {
    this.getAulas();
  }

  getAulas() {
    this.aulaService.getAulas(this.domain_id).subscribe(
      (response: any) => {
        this.aulas = Array.isArray(response.data) ? response.data : [];
      },
      (error: any) => {
        this.helpersService.showErrorMessage('Error al obtener las aulas');
      }
    );
  }

  onAulaChange(event: any) {
    const aulaId = event.value;
    this.getAulaDisponibilidad(aulaId);
    this.getCursoHorarios();
  }

  getAulaDisponibilidad(aulaId: number) {
    this.aulaService.getDisponibilidad(aulaId).subscribe(
      (res: any) => {
        this.aulaDisponibilidad = res.data;
        this.updateCalendar();
      },
      error => {
        this.helpersService.showErrorMessage('Error al obtener la disponibilidad del aula');
      }
    );
  }

  getCursoHorarios() {
    this.horarioService.getHorario(this.curso.id).subscribe(
      (response: any) => {
        this.cursoHorarios = response;
        this.updateCalendar();
      },
      (error: any) => {
        this.helpersService.showErrorMessage('Error al obtener los horarios del curso');
      }
    );
  }

 

  updateCalendar() {
    const events = [
      ...this.aulaDisponibilidad.map(d => {
        const endDate = new Date(`${d.fecha}T${d.hora_fin}`);
        const startDate = new Date(`${d.fecha}T${d.hora_inicio}`);

        return ({
        start: startDate,
        end: endDate,
        title: 'Disponibilidad',
        backendId: d.id,

        backgroundColor: 'green',

      })}),
      // ...this.cursoHorarios.map(h => ({
      //   title: 'Horario del curso',
      //   start: h.hora_inicio,
      //   end: h.hora_fin,
      //   daysOfWeek: [h.day_id],
      //   backgroundColor: 'blue'
      // }))
    ];
    this.calendarOptions.events = events;
    console.log(events);
  }

  handleDateSelect(selectInfo: any) {
    const { start, end } = selectInfo;
    if (this.isWithinAulaDisponibilidad(start, end)) {
      const title = 'Nuevo horario';
      this.calendarOptions.events = [
        ...(this.calendarOptions.events as any[]),
        { title, start, end }
      ];
    } else {
      this.helpersService.showErrorMessage('El horario seleccionado no está dentro de la disponibilidad del aula');
    }
  }

  handleEventClick(clickInfo: any) {
    this.selectedEvent = clickInfo.event;
    this.showReplicateDialog = true;
  }

  handleEvents(events: any) {
    // Aquí puedes manejar los eventos si es necesario
  }

  isWithinAulaDisponibilidad(start: Date, end: Date): boolean {
    const dayOfWeek = start.getDay();
    const disponibilidad = this.aulaDisponibilidad.find(d => d.dayWeek === dayOfWeek);
    if (!disponibilidad) return false;
    
    const disponibilidadStart = new Date(start);
    disponibilidadStart.setHours(parseInt(disponibilidad.hourStart.split(':')[0]), parseInt(disponibilidad.hourStart.split(':')[1]));
    
    const disponibilidadEnd = new Date(start);
    disponibilidadEnd.setHours(parseInt(disponibilidad.hourEnd.split(':')[0]), parseInt(disponibilidad.hourEnd.split(':')[1]));
    
    return start >= disponibilidadStart && end <= disponibilidadEnd;
  }

  replicateHorario() {
    if (this.selectedEvent) {
      const { start, end } = this.selectedEvent;
      const daysToReplicate = [1, 2, 3, 4, 5]; // Lunes a Viernes, ajusta según necesidades
      
      daysToReplicate.forEach(day => {
        if (this.isWithinAulaDisponibilidad(start, end)) {
          this.calendarOptions.events = [
            ...(this.calendarOptions.events as any[]),
            { 
              title: 'Horario replicado', 
              start, 
              end, 
              // daysOfWeek: [day] 
            }
          ];
        }
      });
      
      this.showReplicateDialog = false;
    }
  }

  saveHorario() {
    if (this.parametroForm.valid) {
      const horarios = (this.calendarOptions.events as any[])
        .filter(event => event.title !== 'Horario del curso' && !event.display)
        .map(event => ({
          day_id: event.start.getDay(),
          hora_inicio: event.start.toTimeString().split(' ')[0],
          hora_fin: event.end.toTimeString().split(' ')[0]
        }));

      const data = {
        curso_id: this.curso.id,
        aula_id: this.parametroForm.value.aula_id,
        fechaInicio: this.parametroForm.value.fechaInicio,
        fechaFin: this.parametroForm.value.fechaFin,
        horarios
      };

      this.loading = true;
      this.horarioService.saveHorario(data).subscribe(
        (response: any) => {
          this.helpersService.showSuccessMessage('Horario guardado correctamente');
          this.ref?.close();
        },
        (error: any) => {
          this.helpersService.showErrorMessage('Error al guardar el horario');
        }
      ).add(() => {
        this.loading = false;
      });
    } else {
      this.helpersService.showErrorMessage('Por favor, complete todos los campos requeridos');
    }
  }

  closeModal(event: Event) {
    event.preventDefault();
    this.ref?.close();
  }
}