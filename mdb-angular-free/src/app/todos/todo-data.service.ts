import { Injectable } from '@angular/core';
import { todo } from './todo';

@Injectable()
export class todoDataService {// Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

    // Placeholder for todo's
    todos: todo[] = [];

  constructor() { }

  // Simulate POST /todos
  addTodo(todo: todo): todoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): todoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Simulate GET /todos/:category
  getTodoByCategory(id: number): todo[] {
    return this.todos
      .filter(todo => todo.category === id);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
