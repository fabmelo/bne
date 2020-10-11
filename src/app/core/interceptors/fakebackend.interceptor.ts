// angular
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

// rxjs
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, dematerialize } from 'rxjs/operators';

// json com usuários
import users from './../data/users.json';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  /**
   * Intercepta requisições especificas e cria um ambiente backend fake
   * @param request
   * @param next
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(dematerialize());

    /**
     * Conforme a rota e o verbo usado na requisição da API fake o retorna de uma função específica
     */
    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate(); // Autenticação
        case url.endsWith('/users') && method === 'GET':
          return getUsers(); // Verifica se logado e retorna 401 ou 200
        default:
          return next.handle(request);
      }
    }

    /**
     * Realiza a autenticação e retorna o objeto com os dados do usuário e o token que ficarão disponíveis na sessionStorage
     */
    function authenticate() {

      const { UserName, Password } = body;
      const user = users.find(
        (x) => x.UserName === UserName && x.Password === Password
      );
      if (!user) return error('Usuário ou Senha incorretos.');
      return ok({
        Id: user.Id,
        UserName: user.UserName,
        FirstName: user.FirstName,
        LastName: user.LastName,
        Token: 'fake-jwt-token',
      });
    }

    /**
     * Se não estiver logado retornar como sem autorização 401, caso contrário 200
     */
    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    /**
     * Retorna 200 como sucesso de acesso a API fake
     * @param body
     */
    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    /**
     * Retorna a mensagem de erro recebida
     * @param message
     */
    function error(message) {
      return throwError({ error: { message } });
    }

    /**
     * Retorna de não autorizado junto com o status do HttpResponse 401
     */
    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Não autorizado!' } });
    }

    /**
     * Se logado retorna o Bearer Token
     */
    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
  }

}
