import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends HttpClient {
  login(email: string, password: string): Observable<any> {
    const body = {
      email,
      password,
    };
    return this.post('http://localhost:9200/api/auth/login', body);
  }

  register(body: IUser): Observable<any> {
    return this.post('http://localhost:9200/api/auth/signup', body);
  }
  getTasks(): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.get('http://localhost:9200/api/tasks', { headers });
  }
  createTask(body: any): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.post('http://localhost:9200/api/tasks', body, { headers });
  }
  updateTask(id: string, body: any): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.put(`http://localhost:9200/api/tasks/${id}`, body, { headers });
  }

  deleteTask(id: string): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.delete(`http://localhost:9200/api/tasks/${id}`, { headers });
  }
}
