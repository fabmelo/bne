// angular
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

// outros
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  /**
   * Intercepta as requisições para API e adicione cabeçalho de autorização com token JWT, se disponível
   * @returns Devolve o handle do interceptor
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (JSON.parse(sessionStorage.getItem('currentUser')) !== undefined) {
      if (sessionStorage.getItem('currentUser') !== null) {
        let token = JSON.parse(sessionStorage.getItem('currentUser')).Token;
        let url = request.url;

        // inclui o header somente em requisições para servidor de API da aplicação
        if (
          url.includes(environment.apiUrl) &&
          request.url.search('mocky') !== 12
        ) {
          if (token !== null && token !== undefined) {
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,
              },
            });
          }
        }
      }
    }

    return next.handle(request);
  }
}
