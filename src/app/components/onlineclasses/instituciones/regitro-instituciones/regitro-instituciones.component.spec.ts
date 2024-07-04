import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitroInstitucionesComponent } from './regitro-instituciones.component';

describe('RegitroInstitucionesComponent', () => {
  let component: RegitroInstitucionesComponent;
  let fixture: ComponentFixture<RegitroInstitucionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegitroInstitucionesComponent]
    });
    fixture = TestBed.createComponent(RegitroInstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
