import { FakeBackendInterceptor } from './interceptors/fakebackend.interceptor';
// angular
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// interceptor
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
//import { fakeBackendProvider } from './interceptors/fakebackend.interceptor';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    BrowserModule
  ],
  providers: [
    // authorization / JWT
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    // error / JWT
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // backend fake
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },

    // hash na URL (refresh view)
    { provide: LocationStrategy, useClass: HashLocationStrategy },

  ]
})
export class CoreModule { }
