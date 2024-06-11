import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { welcomeRoutes } from './welcome.routes';

@NgModule({
  imports: [RouterModule.forChild(welcomeRoutes)],
  exports: [RouterModule],
  declarations: [WelcomeComponent],
  providers: [],
})
export class WelcomeModule {}
