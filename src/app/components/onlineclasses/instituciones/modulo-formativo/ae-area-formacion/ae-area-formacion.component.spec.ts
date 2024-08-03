import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeAreaFormacionComponent } from './ae-area-formacion.component';

describe('AeAreaFormacionComponent', () => {
  let component: AeAreaFormacionComponent;
  let fixture: ComponentFixture<AeAreaFormacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AeAreaFormacionComponent]
    });
    fixture = TestBed.createComponent(AeAreaFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
