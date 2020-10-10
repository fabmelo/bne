// angular
import { NgModule } from '@angular/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
