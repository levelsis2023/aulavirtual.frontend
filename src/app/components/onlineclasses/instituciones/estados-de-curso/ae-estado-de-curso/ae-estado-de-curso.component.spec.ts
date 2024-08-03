import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeEstadoDeCursoComponent } from './ae-estado-de-curso.component';

describe('AeEstadoDeCursoComponent', () => {
  let component: AeEstadoDeCursoComponent;
  let fixture: ComponentFixture<AeEstadoDeCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AeEstadoDeCursoComponent]
    });
    fixture = TestBed.createComponent(AeEstadoDeCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
