import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeCiclosComponent } from './ae-ciclos.component';

describe('AeCiclosComponent', () => {
  let component: AeCiclosComponent;
  let fixture: ComponentFixture<AeCiclosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AeCiclosComponent]
    });
    fixture = TestBed.createComponent(AeCiclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
