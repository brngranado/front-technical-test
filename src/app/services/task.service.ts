import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<any>([]);
  tasks$: Observable<any> = this.tasksSubject.asObservable();

  constructor(
    private router: Router,
    @Inject(ApiService) private apiservice: ApiService
  ) {}

  findAll() {
    return this.apiservice.getTasks().subscribe((data: any) => {
      this.tasksSubject.next(data);
    });
  }

  create(body: any) {
    this.apiservice.createTask(body).subscribe((data: any) => {
      console.log('data en el create', data);
      this.findAll();
    });
  }

  update(body: any) {
    this.apiservice
      .updateTask(body.id, { name: body.name })
      .subscribe((data: any) => {
        console.log('data en el update', data);
        this.findAll();
      });
  }

  delete(id: string) {
    this.apiservice.deleteTask(id).subscribe((data: any) => {
      console.log('data en el delete', data);
      this.findAll();
    });
  }
}
