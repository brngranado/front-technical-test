import { NgModule } from '@angular/core';
import { LoginService } from '../services/login.service';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [],
  declarations: [RegisterComponent],
  providers: [LoginService],
})
export class RegisterModule {}
