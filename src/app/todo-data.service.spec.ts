import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));
});

describe('#findAll()', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it("should return an empty array by default", inject([TodoDataService], (service: TodoDataService) => {
    expect(service.findAll()).toEqual([]);
  }));

   it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 :Todo = new Todo({title: 'Hello 1', complete: false});
      let todo2 :Todo = new Todo({title: 'Hello 2', complete: true});
      service.setTodos([todo1, todo2]);
      expect(service.findAll()).toEqual([todo1, todo2]);
    }));
});

describe('#delete(id)', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
    let todo1 = new Todo({id: "1", title: 'Hello 1', complete: false});
    let todo2 = new Todo({id: "2", title: 'Hello 2', complete: true});
    service.setTodos([todo1, todo2]);
    let result :Todo[] = service.delete("1");
    expect(result).toEqual([todo2]);
  }));

  it('should not removing anything if todo with corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
    let todo1 = new Todo({id: "1", title: 'Hello 1', complete: false});
    let todo2 = new Todo({id: "2", title: 'Hello 2', complete: true});
    service.setTodos([todo1, todo2]);
    let result :Todo[] = service.delete("3");
    expect(result).toEqual([todo1, todo2]);
  }));

});

describe('#update(id, values)', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
    let todo = new Todo({id: "1", title: 'Hello 1', complete: false});
    service.setTodos([todo]);
    let updatedTodo = service.update(new Todo({id: 1, title: 'new title', order: 1, complete: false}));
    expect(updatedTodo.title).toEqual('new title');
  }));

  it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService) => {
    let todo = new Todo({title: 'Hello 1', complete: false});
    service.setTodos([todo]);
    let updatedTodo = service.update(new Todo({id: "3", title: 'new title', order: 1, complete: false}));
    expect(updatedTodo).toEqual(null);
  }));

});

describe('#toggleTodoComplete(todo)', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
    let todo = new Todo({title: 'Hello 1', complete: false});
    service.setTodos([todo]);
    let updatedTodo = service.toggleTodoComplete(todo);
    expect(updatedTodo.complete).toEqual(true);
    service.toggleTodoComplete(todo);
    expect(updatedTodo.complete).toEqual(false);
  }));

});
