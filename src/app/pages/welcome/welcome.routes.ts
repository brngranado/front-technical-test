import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

export const welcomeRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
];

// @NgModule({
//   imports: [RouterModule.forChild(welcomeRoutes)],
//   exports: [RouterModule],
//   declarations: [],
//   providers: [],
// })
// export class WelcomeRoutingModule {}
