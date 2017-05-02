import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'app works!';
  newTodo :Todo = new Todo({});

  constructor(private todoDataService: TodoDataService) {
  }

  public toggleTodoComplete(todo :Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  addTodo() {
    this.todoDataService.add(this.newTodo);
    this.newTodo = new Todo({});
  }

  removeTodo(todo :Todo) {
    this.todoDataService.delete(todo.id);
  }

  get todos() :Todo[] {
    return this.todoDataService.findAll();
  }
}
