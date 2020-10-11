// angular
import { NgModule } from '@angular/core';

// components
import { PeoplesComponent } from './peoples.component';

// modules
import { SharedModule } from './../../../../shared/shared.module';
import { PeoplesRoutingModule } from './peoples-routing.module';

@NgModule({
  declarations: [
    PeoplesComponent
  ],
  imports: [
    SharedModule,
    PeoplesRoutingModule,
  ]
})
export class PeoplesModule { }
