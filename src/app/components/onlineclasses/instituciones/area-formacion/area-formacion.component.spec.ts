import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaFormacionComponent } from './area-formacion.component';

describe('AreaFormacionComponent', () => {
  let component: AreaFormacionComponent;
  let fixture: ComponentFixture<AreaFormacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaFormacionComponent]
    });
    fixture = TestBed.createComponent(AreaFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
