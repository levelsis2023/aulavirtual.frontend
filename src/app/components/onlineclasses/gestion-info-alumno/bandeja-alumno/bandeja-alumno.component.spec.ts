import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaAlumnoComponent } from './bandeja-alumno.component';

describe('BandejaAlumnoComponent', () => {
  let component: BandejaAlumnoComponent;
  let fixture: ComponentFixture<BandejaAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandejaAlumnoComponent]
    });
    fixture = TestBed.createComponent(BandejaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
