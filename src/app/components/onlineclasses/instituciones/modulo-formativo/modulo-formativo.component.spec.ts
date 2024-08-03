import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloFormativoComponent } from './modulo-formativo.component';

describe('ModuloFormativoComponent', () => {
  let component: ModuloFormativoComponent;
  let fixture: ComponentFixture<ModuloFormativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloFormativoComponent]
    });
    fixture = TestBed.createComponent(ModuloFormativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
