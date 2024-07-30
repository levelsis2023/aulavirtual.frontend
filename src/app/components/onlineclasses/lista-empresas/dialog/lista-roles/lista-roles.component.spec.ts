import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRolesComponent } from './lista-roles.component';

describe('RegistraRolComponent', () => {
  let component: ListaRolesComponent;
  let fixture: ComponentFixture<ListaRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRolesComponent]
    });
    fixture = TestBed.createComponent(ListaRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
