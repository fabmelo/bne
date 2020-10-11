// angular
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// components
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule{}
