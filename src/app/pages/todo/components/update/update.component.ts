import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { TaskService } from '../../../../services/task.service';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    CommonModule,
    NzLayoutModule,
    NzDrawerModule,
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent {
  @Input() name: string = '';
  @Input() id: string = '';

  taskUpdate: FormGroup<{
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
    console.log('submit', this.taskUpdate.value, this.id);
    if (this.taskUpdate.valid) {
      this.taskService.update({
        id: this.id,
        name: this.taskUpdate.value.name || '',
      });
      this.close();
    } else {
      Object.values(this.taskUpdate.controls).forEach((control) => {
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
  ) {
    this.taskUpdate.get('name')?.setValue(this.name);
  }
}
