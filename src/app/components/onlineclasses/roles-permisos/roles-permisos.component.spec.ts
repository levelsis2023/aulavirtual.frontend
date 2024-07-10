import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPermisosComponent } from './roles-permisos.component';

describe('RolesPermisosComponent', () => {
  let component: RolesPermisosComponent;
  let fixture: ComponentFixture<RolesPermisosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesPermisosComponent]
    });
    fixture = TestBed.createComponent(RolesPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
