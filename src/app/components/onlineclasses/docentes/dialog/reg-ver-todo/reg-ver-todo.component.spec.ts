import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegVerTodoComponent } from './reg-ver-todo.component';

describe('RegVerTodoComponent', () => {
  let component: RegVerTodoComponent;
  let fixture: ComponentFixture<RegVerTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegVerTodoComponent]
    });
    fixture = TestBed.createComponent(RegVerTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
