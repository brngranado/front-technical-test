import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routes';
import { LoginService } from '../services/login.service';

@NgModule({
  imports: [],
  declarations: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule {}
