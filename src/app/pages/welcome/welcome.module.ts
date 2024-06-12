import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { welcomeRoutes } from './welcome.routes';
import { TodoComponent } from '../todo/todo.component';

@NgModule({
  imports: [RouterModule.forChild(welcomeRoutes)],
  exports: [RouterModule],
  declarations: [WelcomeComponent, TodoComponent],
  providers: [],
})
export class WelcomeModule {}
