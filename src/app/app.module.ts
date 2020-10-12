// angular
import { NgModule } from '@angular/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { peopleReducer } from './reducers/peoples.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({peoples: peopleReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
