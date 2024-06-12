import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterLink } from '@angular/router';
import { LoginService } from '../services/login.service';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    name: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    name: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loginservice.signOut({
        email: this.validateForm.value.email || '',
        password: this.validateForm.value.password || '',
        name: this.validateForm.value.name,
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    @Inject(LoginService) private loginservice: LoginService,
    private fb: NonNullableFormBuilder
  ) {}
}
