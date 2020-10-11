// angular
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class UtilService {

  constructor() {}

  /**
   * Manipulação de erros
   * @param error
   * @returns Devolve o erro
   */
  handleError(error: HttpErrorResponse) {

    let errorMessage = "";

    if(error.status === undefined || error.message === undefined)
      return throwError('Erro ao resolver API');

    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }

    return throwError(errorMessage);
  }

}
