import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearForoCursoComponent } from './crear-foro-curso.component';

describe('CrearForoCursoComponent', () => {
  let component: CrearForoCursoComponent;
  let fixture: ComponentFixture<CrearForoCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearForoCursoComponent]
    });
    fixture = TestBed.createComponent(CrearForoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
