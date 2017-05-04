import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  nbTodos: number;

  constructor() { }

  get status() :string {
    let result :string = 'item';
    if (this.nbTodos > 1) {
      result += 's';
    }
    result += ' left';
    return result;
  }
}
