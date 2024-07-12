import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoMaestroComponent } from './mantenimiento-maestro.component';

describe('MantenimientoMaestroComponent', () => {
  let component: MantenimientoMaestroComponent;
  let fixture: ComponentFixture<MantenimientoMaestroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenimientoMaestroComponent]
    });
    fixture = TestBed.createComponent(MantenimientoMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
