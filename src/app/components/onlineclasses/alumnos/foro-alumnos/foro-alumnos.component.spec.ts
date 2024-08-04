import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoAlumnosComponent } from './foro-alumnos.component';

describe('ForoAlumnosComponent', () => {
  let component: ForoAlumnosComponent;
  let fixture: ComponentFixture<ForoAlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForoAlumnosComponent]
    });
    fixture = TestBed.createComponent(ForoAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
