import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraRolComponent } from './registra-rol.component';

describe('RegistraRolComponent', () => {
  let component: RegistraRolComponent;
  let fixture: ComponentFixture<RegistraRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraRolComponent]
    });
    fixture = TestBed.createComponent(RegistraRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
