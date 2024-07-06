import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesFormativasComponent } from './unidades-formativas.component';

describe('UnidadesFormativasComponent', () => {
  let component: UnidadesFormativasComponent;
  let fixture: ComponentFixture<UnidadesFormativasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadesFormativasComponent]
    });
    fixture = TestBed.createComponent(UnidadesFormativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
