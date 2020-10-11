// angular
import { NgModule } from '@angular/core';

// components
import { AuthComponent } from './auth.component';

// modules
import { SharedModule } from './../../../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
