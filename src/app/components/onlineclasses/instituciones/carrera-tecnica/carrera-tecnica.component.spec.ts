import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraTecnicaComponent } from './carrera-tecnica.component';

describe('CarreraTecnicaComponent', () => {
  let component: CarreraTecnicaComponent;
  let fixture: ComponentFixture<CarreraTecnicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarreraTecnicaComponent]
    });
    fixture = TestBed.createComponent(CarreraTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
