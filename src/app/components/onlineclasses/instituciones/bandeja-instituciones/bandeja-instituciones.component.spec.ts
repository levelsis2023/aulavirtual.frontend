import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaInstitucionesComponent } from './bandeja-instituciones.component';

describe('BandejaInstitucionesComponent', () => {
  let component: BandejaInstitucionesComponent;
  let fixture: ComponentFixture<BandejaInstitucionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandejaInstitucionesComponent]
    });
    fixture = TestBed.createComponent(BandejaInstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
