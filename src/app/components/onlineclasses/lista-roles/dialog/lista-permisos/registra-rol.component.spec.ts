import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPermisosComponent } from './lista-permisos.component';

describe('RegistraRolComponent', () => {
  let component: ListaPermisosComponent;
  let fixture: ComponentFixture<ListaPermisosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPermisosComponent]
    });
    fixture = TestBed.createComponent(ListaPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
