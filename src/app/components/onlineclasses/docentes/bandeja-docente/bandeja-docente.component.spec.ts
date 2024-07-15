import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaDocenteComponent } from './bandeja-docente.component';

describe('BandejaDocenteComponent', () => {
  let component: BandejaDocenteComponent;
  let fixture: ComponentFixture<BandejaDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandejaDocenteComponent]
    });
    fixture = TestBed.createComponent(BandejaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
