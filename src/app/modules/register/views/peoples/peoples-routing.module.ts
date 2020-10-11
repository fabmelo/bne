// angular
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// components
import { PeoplesComponent } from './peoples.component';

const routes: Routes = [
  {
    path: '',
    component: PeoplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeoplesRoutingModule{}
