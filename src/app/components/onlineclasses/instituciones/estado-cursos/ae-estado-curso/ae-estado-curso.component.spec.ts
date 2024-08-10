import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeEstadoCursoComponent } from './ae-estado-curso.component';

describe('AeEstadoCursoComponent', () => {
  let component: AeEstadoCursoComponent;
  let fixture: ComponentFixture<AeEstadoCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AeEstadoCursoComponent]
    });
    fixture = TestBed.createComponent(AeEstadoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
