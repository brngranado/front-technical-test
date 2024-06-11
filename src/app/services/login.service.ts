import { Inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token = '';
  constructor(
    private router: Router,
    @Inject(ApiService) private apiservice: ApiService
  ) {}

  login(email: any, password: any) {
    this.apiservice.login(email, password).subscribe((data) => {
      console.log('token', data);
      this.token = data.token;
      sessionStorage.setItem('token', this.token);

      if (sessionStorage.getItem('token')) {
        this.router.navigate(['/welcome']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
