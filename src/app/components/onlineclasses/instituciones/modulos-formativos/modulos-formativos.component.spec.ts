import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosFormativosComponent } from './modulos-formativos.component';

describe('ModulosFormativosComponent', () => {
  let component: ModulosFormativosComponent;
  let fixture: ComponentFixture<ModulosFormativosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulosFormativosComponent]
    });
    fixture = TestBed.createComponent(ModulosFormativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
