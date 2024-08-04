import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeModulosFormativosComponent } from './ae-modulos-formativos.component';

describe('AeModulosFormativosComponent', () => {
  let component: AeModulosFormativosComponent;
  let fixture: ComponentFixture<AeModulosFormativosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AeModulosFormativosComponent]
    });
    fixture = TestBed.createComponent(AeModulosFormativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
