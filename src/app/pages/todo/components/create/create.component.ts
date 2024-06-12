import { Component } from '@angular/core';
import { TaskService } from '../../../../services/task.service';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    NzDrawerModule,
    CommonModule,
    NzLayoutModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  taskCreate: FormGroup<{
    name: FormControl<string>;
  }> = this.fb.group({
    name: ['', [Validators.required]],
  });

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  submitForm(): void {
    console.log('submit', this.taskCreate.value);
    if (this.taskCreate.valid) {
      this.taskService.create({
        name: this.taskCreate.value.name || '',
      });
      this.close();
    } else {
      Object.values(this.taskCreate.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  constructor(
    private taskService: TaskService,
    private fb: NonNullableFormBuilder
  ) {}
}
