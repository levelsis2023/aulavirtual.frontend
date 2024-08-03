import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDeCursoComponent } from './estados-de-curso.component';

describe('EstadosDeCursoComponent', () => {
  let component: EstadosDeCursoComponent;
  let fixture: ComponentFixture<EstadosDeCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadosDeCursoComponent]
    });
    fixture = TestBed.createComponent(EstadosDeCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
