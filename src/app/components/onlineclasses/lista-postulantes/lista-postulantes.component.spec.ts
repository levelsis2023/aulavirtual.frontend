import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPostulantesComponent } from './lista-postulantes.component';

describe('ListaPostulantesComponent', () => {
  let component: ListaPostulantesComponent;
  let fixture: ComponentFixture<ListaPostulantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPostulantesComponent]
    });
    fixture = TestBed.createComponent(ListaPostulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
