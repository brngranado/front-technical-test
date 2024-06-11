import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends HttpClient {
  login(email: string, password: string): Observable<any> {
    const body = {
      email,
      password,
    };
    return this.post('http://localhost:4200/api/login', body);
  }
}
