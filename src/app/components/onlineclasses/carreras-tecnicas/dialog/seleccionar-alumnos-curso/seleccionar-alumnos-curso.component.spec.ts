import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarAlumnosCursoComponent } from './seleccionar-alumnos-curso.component';

describe('SeleccionarAlumnosCursoComponent', () => {
  let component: SeleccionarAlumnosCursoComponent;
  let fixture: ComponentFixture<SeleccionarAlumnosCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionarAlumnosCursoComponent]
    });
    fixture = TestBed.createComponent(SeleccionarAlumnosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
