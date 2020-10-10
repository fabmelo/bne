// angular
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    BrowserModule
  ],
  providers: [
    // Authorization / JWT
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    // Error / JWT
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // Hash na URL
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class CoreModule { }
