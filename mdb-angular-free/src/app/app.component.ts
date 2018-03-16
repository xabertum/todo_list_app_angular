import { CategoryDataService } from './categories/category-data.service';
import { Component, OnInit } from '@angular/core';
import {Todo} from './todos/todo';
import {todoDataService} from './todos/todo-data.service';
import {Category} from './categories/category';

@Component({
  selector: 'mdb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [todoDataService, CategoryDataService]

})

export class AppComponent implements OnInit {

  newtodo: Todo = new Todo();
  newCategory: Category = new Category();
  selectedCategory: Category;

  constructor(private todoDataService: todoDataService, private categoryDataService: CategoryDataService) {
  }


  addtodo() {
    this.newtodo.category = this.selectedCategory.id;
    this.todoDataService.addTodo(this.newtodo);
    this.newtodo = new Todo();
    console.log(this.todos);
  }

  toggletodoComplete(Todo) {
    this.todoDataService.toggleTodoComplete(Todo);
  }

  removetodo(Todo) {
    this.todoDataService.deleteTodoById(Todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  get todosForCat() {
    return this.todoDataService.getTodoByCategory(this.selectedCategory.id);
  }

  counttodosByCat(id: number) {
    return this.todoDataService.getTodoByCategory(id).length;
  }

  addCategory() {
    this.categoryDataService.addCategory(this.newCategory);
    this.newCategory = new Category();
  }

  removeCategory(category) {
    this.categoryDataService.deleteCategoryById(category.id);
  }

  get categories() {
    return this.categoryDataService.getAllCategories();
  }

  categoryById(id: number) {
    return this.categoryDataService.getCategoryById(id);
  }

  addInitialCategory(category) {
    this.categoryDataService.addCategory(category);
  }

  addInitialtodo(Todo) {
    this.todoDataService.addTodo(Todo);
  }


  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  ngOnInit() {
    let initCat = new Category();
    initCat = {'name' : 'today', 'id' : null , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'tomorrow', 'id' : null , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Work', 'id' : null , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Holidays', 'id' : null , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Shopping list', 'id' : null , };
    this.addInitialCategory(initCat);

    let inittodo = new Todo();
    inittodo = {'title' : 'task1', 'complete': false, 'id' : null , category: 1 };
    this.addInitialtodo(inittodo);
    inittodo = {'title' : 'task2', 'complete': true, 'id' : null , category: 2 };
    this.addInitialtodo(inittodo);
    inittodo = {'title' : 'task3', 'complete': true, 'id' : null , category: 1 };
    this.addInitialtodo(inittodo);
  }

}