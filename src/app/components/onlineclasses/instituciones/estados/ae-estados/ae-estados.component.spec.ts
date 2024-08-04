import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeEstadosComponent } from './ae-estados.component';

describe('AeEstadosComponent', () => {
  let component: AeEstadosComponent;
  let fixture: ComponentFixture<AeEstadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AeEstadosComponent]
    });
    fixture = TestBed.createComponent(AeEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
