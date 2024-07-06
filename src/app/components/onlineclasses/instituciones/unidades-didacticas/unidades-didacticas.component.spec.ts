import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesDidacticasComponent } from './unidades-didacticas.component';

describe('UnidadesDidacticasComponent', () => {
  let component: UnidadesDidacticasComponent;
  let fixture: ComponentFixture<UnidadesDidacticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadesDidacticasComponent]
    });
    fixture = TestBed.createComponent(UnidadesDidacticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
