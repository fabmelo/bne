// angular
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// interceptor
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FakeBackendInterceptor } from './interceptors/fakebackend.interceptor';

// locale
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

@NgModule({
  imports: [HttpClientModule],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    // locale
    { provide: LOCALE_ID, useValue: 'pt-BR' },

    // authorization / JWT
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    // error / JWT
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // backend fake
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },

    // hash na URL (refresh view)
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
})
export class CoreModule {}
