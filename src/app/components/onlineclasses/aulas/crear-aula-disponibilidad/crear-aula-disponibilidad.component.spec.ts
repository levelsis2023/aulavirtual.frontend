import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAulaDisponibilidadComponent } from './crear-aula-disponibilidad.component';

describe('CrearAulaDisponibilidadComponent', () => {
  let component: CrearAulaDisponibilidadComponent;
  let fixture: ComponentFixture<CrearAulaDisponibilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAulaDisponibilidadComponent]
    });
    fixture = TestBed.createComponent(CrearAulaDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
