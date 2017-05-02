import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  // todos in memory
  todos: Todo[] = [];

  constructor() { }



  public add(todo: Todo): Todo[] {
    if (!todo.id) {
      todo.id = Math.random().toString(14);
    }
    this.todos.push(todo);
    return this.todos;
  }

  public getById(id: String) {
    return this.todos.find(todo => todo.id == id);
  }

  public delete(id: String): Todo[] {
    let indexTodo = this.todos.findIndex(todo => todo.id == id);
    if (indexTodo !== -1) {
      this.todos.splice(indexTodo, 1);
    }
    return this.todos;
  }

  public update(todo: Todo): Todo {
    let fTodo :Todo = this.todos.find(pTodo => pTodo.id == todo.id);
    if (fTodo) {
      fTodo.complete = todo.complete;
      fTodo.order = todo.order;
      fTodo.title = todo.title;
      return fTodo;
    }
    return null;
  }

  public findAll(): Todo[] {
    return this.todos;
  }

  public toggleTodoComplete(todo :Todo): Todo {
    todo.complete = !todo.complete;
    this.update(todo);
    return todo;
  }

  setTodos(todos: Todo[]) {
    this.todos = todos;
  }
}
