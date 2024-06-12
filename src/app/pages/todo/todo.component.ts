import { Component } from '@angular/core';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ListComponent } from './components/lists/list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CreateComponent, UpdateComponent, ListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {}
