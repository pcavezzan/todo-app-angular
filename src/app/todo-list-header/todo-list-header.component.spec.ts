import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListHeaderComponent } from './todo-list-header.component';
import { Todo } from '../todo';
import { FormsModule } from '@angular/forms';

describe('TodoListHeaderComponent', () => {
  let component: TodoListHeaderComponent;
  let fixture: ComponentFixture<TodoListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ TodoListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have a newTodo todo`, async(() => {
    let fixture = TestBed.createComponent(TodoListHeaderComponent);
    let app :TodoListHeaderComponent = fixture.debugElement.componentInstance;
    expect(app.newTodo instanceof Todo).toBeTruthy()
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(TodoListHeaderComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todos');
  }));
});
