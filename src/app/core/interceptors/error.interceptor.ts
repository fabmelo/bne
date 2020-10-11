// angular
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

// rxjs
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// services
import { AuthService } from '../../modules/security/services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  /**
   * Intercepta a requisições para API em caso de erro
   * @param request
   * @param next
   * @returns Devolve o handle de erros do interceptor
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.authService.logout();
          window.location.reload.bind(window.location);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
