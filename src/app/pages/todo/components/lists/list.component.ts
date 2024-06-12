import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TaskService } from '../../../../services/task.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { UpdateComponent } from '../update/update.component';
interface Task {
  id: string;
  name: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NzTableModule,
    CommonModule,
    NzLayoutModule,
    NzPaginationModule,
    UpdateComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  @Output() props = new EventEmitter<any>();

  emitProps(name: string, id: string) {
    this.props.emit({ name: name, id: id });
  }
  delete(id: string) {
    this.taskService.delete(id);
  }
  ngOnInit() {
    this.taskService.findAll();
  }
}
