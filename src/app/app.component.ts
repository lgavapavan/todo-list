import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<p> aqui pode ser colocado html </p>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos : Todo[] = [];
  public title : String = 'Minhas tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Passear com o cão', false));
    this.todos.push(new Todo(2, 'Comprar livro de programação', true));
    this.todos.push(new Todo(3, 'Cortar cabelo', false));
  }

  alterarTexto() {
    this.title = 'Texto alterado'
  }
}

