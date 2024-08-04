import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAulaComponentComponent } from './crear-aula-component.component';

describe('CrearAulaComponentComponent', () => {
  let component: CrearAulaComponentComponent;
  let fixture: ComponentFixture<CrearAulaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAulaComponentComponent]
    });
    fixture = TestBed.createComponent(CrearAulaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
