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

  constructor(private todoDataService: TodoDataService) {
  }

  onAddTodo(todo :Todo) {
    this.todoDataService.add(todo);
  }

  onToggleTodoComplete(todo :Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo :Todo) {
    this.todoDataService.delete(todo.id);
  }

  get todos() :Todo[] {
    return this.todoDataService.findAll();
  }
}
