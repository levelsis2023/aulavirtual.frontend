import { Component, OnInit } from '@angular/core';
// @fullcalendar plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { HelpersService } from 'src/app/helpers.service';
import { AulaService } from '../../service/aula.service';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-crear-aula-disponibilidad',
  templateUrl: './crear-aula-disponibilidad.component.html',
  styleUrls: ['./crear-aula-disponibilidad.component.scss']
})
export class CrearAulaDisponibilidadComponent implements OnInit {
  today: string = '';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
  };
  loading: boolean = false;
  showDialog: boolean = false;
  showEventMenu: boolean = false;
  showReplicateDialog: boolean = false;
  clickedEvent: any = null;
  selectedDate: Date = new Date();
  startTime: Date = new Date();
  endTime: Date = new Date();
  replicateStartDate: Date = new Date();
  replicateEndDate: Date = new Date();
  view: string = '';
  changedEvent: any;
  events: any[] = [];
  daysOfWeek: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  selectedDays: boolean[] = [false, false, false, false, false, false, false];
  domain_id: number = 1;
  currentBackendId: number = 0;
  constructor(
    public config: DynamicDialogConfig,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private helpersService: HelpersService,
    private aulaService: AulaService
  ) {
    this.changedEvent = {
      start: new Date(new Date().setHours(0, 0, 0, 0)), // Fecha y hora de inicio (0:00)
      end: new Date(new Date().setHours(23, 59, 59, 999)), // Fecha y hora de fin (23:59:59)
      title: '',
      description: '',
      location: '',
      backgroundColor: '',
      borderColor: '',
      textColor: '',
      tag: { color: '', name: '' }
    };
  }

  ngOnInit(): void {
    this.today = new Date().toISOString().split('T')[0];
    this.domain_id = this.helpersService.getDominioId();
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      height: 720,
      initialDate: this.today,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      selectable: true,
      editable: true,
      selectMirror: true,
      dayMaxEvents: true,
      dateClick: (e: any) => this.onDateClick(e),
      eventClick: (e: any) => this.onEventClick(e),
      select: (e: any) => this.onDateSelect(e),
      events: this.events,
      // eventDrop: (e: any) => this.onEventDrop(e),
    };

    this.getEvents();
  }

  onDateClick(e: any) {
    const clickedDate = e.date;
    const existingEvent = this.findEventOnDate(clickedDate);

    if (existingEvent) {
      // Si existe un evento, abrimos el menú de evento
      this.clickedEvent = existingEvent;
      this.selectedDate = new Date(existingEvent.start);
      this.startTime = new Date(existingEvent.start);
      this.endTime = new Date(existingEvent.end);
      this.view = 'display';
      this.showEventMenu = true;
      this.currentBackendId = existingEvent.backendId;
      this.showDialog = false; // Aseguramos que el diálogo de edición esté cerrado
    } else {
      // Si no existe un evento, abrimos el diálogo para crear uno nuevo
      this.openNewEventDialog(clickedDate);
      this.showEventMenu = false; // Aseguramos que el menú de evento esté cerrado
    }
  }

  findEventOnDate(date: Date): any {
    return this.events.find(event => {
      const eventDate = new Date(event.start);
      return eventDate.toDateString() === date.toDateString();
    });
  }

  openNewEventDialog(date: Date) {
    this.view = 'new';
    this.showDialog = true;
    this.selectedDate = date;
    this.startTime = new Date(date.setHours(0, 0, 0, 0));
    this.endTime = new Date(date.setHours(23, 59, 59, 999));
    this.changedEvent = {
      start: this.startTime,
      end: this.endTime,
      title: 'Disponibilidad',
      tag: { color: '', name: '' },
    };
  }

  onEventClick(e: any) {
    this.clickedEvent = e.event;
    this.selectedDate = new Date(this.clickedEvent.start);
    this.startTime = new Date(this.clickedEvent.start);
    this.endTime = new Date(this.clickedEvent.end);
    this.view = 'display';
    this.showEventMenu = true;
    this.currentBackendId = this.clickedEvent.backendId;
  }

  onDateSelect(e: any) {
    this.view = 'new';
    this.showDialog = true;
    this.selectedDate = e.start;
    this.startTime = new Date(this.selectedDate.setHours(0, 0, 0, 0));
    this.endTime = new Date(this.selectedDate.setHours(23, 59, 59, 999));
    this.changedEvent = {
      start: this.startTime,
      end: this.endTime,
      title: 'Disponibilidad',
      tag: { color: '', name: '' },
    };
  }

  handleSave() {
    if (!this.validate()) {
      return;
    }

    this.showDialog = false;

    const start = new Date(this.selectedDate);
    start.setHours(this.startTime.getHours(), this.startTime.getMinutes());

    const end = new Date(this.selectedDate);
    end.setHours(this.endTime.getHours(), this.endTime.getMinutes());

    const eventToSave = {
      ...this.changedEvent,
      start: start,
      end: end,
      title: 'Disponibilidad',
      backgroundColor: this.changedEvent.tag?.color || '#3788d8',
      borderColor: this.changedEvent.tag?.color || '#3788d8',
      textColor: '#212121',
      id: this.changedEvent.id || Math.floor(Math.random() * 10000)
    };

    this.events = this.events.filter(event =>
      new Date(event.start).toDateString() !== start.toDateString() ||
      event.id === eventToSave.id
    );

    this.events.push(eventToSave);

    this.updateCalendarOptions();
    this.clickedEvent = null;
  }
  onEditClick() {
    this.view = 'edit';
    this.showEventMenu = false;
    this.showDialog = true;
    this.changedEvent = { ...this.clickedEvent.extendedProps, ...this.clickedEvent };
    console.log(this.changedEvent,this.clickedEvent);
    this.selectedDate = new Date(this.clickedEvent.start);
    this.startTime = new Date(this.clickedEvent.start);
    this.endTime = new Date(this.clickedEvent.end);
    this.currentBackendId = this.changedEvent.backendId;
  }

  delete() {
    this.events = this.events.filter(i => i.id.toString() !== this.clickedEvent.id.toString());
    this.updateCalendarOptions();
    this.showDialog = false;
    //delte in backend
    console.log(this.clickedEvent);
    if(this.currentBackendId){
      this.aulaService.deleteDisponibilidad(this.currentBackendId).subscribe((res:any)=>{
        this.helpersService.showSuccessMessage('Disponibilidad eliminada correctamente');
      },(error:any)=>{
        this.helpersService.showErrorMessage('Ocurrió un error al eliminar la disponibilidad');
      });
    }
  }

  openReplicateDialog() {
    this.showEventMenu = false;
    this.showReplicateDialog = true;
    this.replicateStartDate = new Date(this.clickedEvent.start);
    this.replicateEndDate = new Date(this.clickedEvent.end);
  }

  replicateEvent() {
    if (!this.validateReplication()) {
      return;
    }
  
    const start = new Date(this.replicateStartDate);
    const end = new Date(this.replicateEndDate);
  
    // Obtener las horas del evento original
    const originalStartTime = new Date(this.clickedEvent.start);
    const originalEndTime = new Date(this.clickedEvent.end);
  
    let currentDate = new Date(start);
  
    while (currentDate <= end) {
      const dayOfWeek = currentDate.getDay();
      
      if (this.selectedDays[dayOfWeek]) {
        const newEventStart = new Date(currentDate);
        newEventStart.setHours(originalStartTime.getHours(), originalStartTime.getMinutes());
  
        const newEventEnd = new Date(currentDate);
        newEventEnd.setHours(originalEndTime.getHours(), originalEndTime.getMinutes());
  
        const newEvent = {
          title: 'Disponibilidad',
          start: newEventStart,
          end: newEventEnd,
          backgroundColor: this.clickedEvent.backgroundColor,
          borderColor: this.clickedEvent.borderColor,
          textColor: this.clickedEvent.textColor,
          id: Math.floor(Math.random() * 10000)
        };
  
        // Eliminar cualquier evento existente en la misma fecha
        this.events = this.events.filter(event => 
          new Date(event.start).toDateString() !== currentDate.toDateString()
        );
  
        // Añadir el nuevo evento
        this.events.push(newEvent);
      }
  
      // Avanzar al siguiente día
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    this.updateCalendarOptions();
    this.showReplicateDialog = false;
  }

  validate() {
    return this.startTime && this.endTime && this.startTime < this.endTime;
  }

  validateReplication() {
    return this.replicateStartDate && this.replicateEndDate && this.replicateStartDate <= this.replicateEndDate;
  }

  onEventDrop(e: any) {
    this.clickedEvent = e.event;
    this.changedEvent = { ...this.clickedEvent };
    this.handleSave();
  }

  onEventResize(e: any) {
    this.clickedEvent = e.event;
    this.changedEvent = { ...this.clickedEvent };
    this.handleSave();
  }

  updateCalendarOptions() {
    this.calendarOptions = {
      ...this.calendarOptions,
      events: this.events
    };
  }
  saveEvents() {
    this.spinner.show();
    this.loading = true;
    console.log(this.events);
    const data = {
      aulaId: this.config.data,
      domainId: this.domain_id,
      events: this.events.map(event => {
        const startDate = new Date(event.start);
        const endDate = new Date(event.end);
        return {
          day: startDate.toISOString().split('T')[0],
          hourStart: this.formatTime(startDate),
          hourEnd: this.formatTime(endDate),
          dayWeek: startDate.getDay(),
          id: event.backendId
        };
      })
    };
    
    this.aulaService.saveDisponibilidad(data).subscribe(
      (response: any) => {
        this.spinner.hide();
        this.loading = false;
        this.helpersService.showSuccessMessage('Disponibilidad guardada correctamente');
      },
      (error: any) => {
        this.spinner.hide();
        this.loading = false;
        this.helpersService.showErrorMessage('Ocurrió un error al guardar la disponibilidad');
      }
    );
  }
  
  getEvents() {
    this.spinner.show();
    this.loading = true;
    this.aulaService.getDisponibilidad(this.config.data).subscribe((res: any) => {
      this.events = res.data.map((event: any) => {
        const startDate = new Date(`${event.fecha}T${event.hora_inicio}`);
        const endDate = new Date(`${event.fecha}T${event.hora_fin}`);
        
        return {
          ...event,
          start: startDate,
          end: endDate,
          hourStart: event.hora_inicio,
          hourEnd: event.hora_fin,
          backendId: event.id,
          title: 'Disponibilidad',
        };
      });
      this.updateCalendarOptions();
      this.spinner.hide();
      this.loading = false;
    });
  }
  private formatTime(date: Date): string {
    return date.toTimeString().split(' ')[0];
  }
}
