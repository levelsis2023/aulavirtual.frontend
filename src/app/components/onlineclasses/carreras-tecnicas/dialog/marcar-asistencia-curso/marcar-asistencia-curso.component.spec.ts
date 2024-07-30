import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarAsistenciaCursoComponent } from './marcar-asistencia-curso.component';

describe('MarcarAsistenciaCursoComponent', () => {
  let component: MarcarAsistenciaCursoComponent;
  let fixture: ComponentFixture<MarcarAsistenciaCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcarAsistenciaCursoComponent]
    });
    fixture = TestBed.createComponent(MarcarAsistenciaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
