// angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// services
import { UtilService } from './../../../core/services/util.service';

// interface
import { People } from './../models/people.interface';

// rxjs
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeoplesService {
  // urls dos jsons mockados
  jsonPageOne: string = 'https://run.mocky.io/v3/1fc1f3c5-89cb-4a9f-88d3-35c5103ba3fc';
  jsonPageTwo: string = 'https://run.mocky.io/v3/64d7e4b9-3534-4287-a720-83ea8690891e';
  jsonPageThree: string = 'https://run.mocky.io/v3/f07560b6-8aa5-4762-8cc5-0d3ff40dfed6';
  jsonPageFour: string = 'https://run.mocky.io/v3/79375e4e-3edb-4607-b7a7-e5bc6a345669';
  jsonPageFive: string = 'https://run.mocky.io/v3/8d69aff8-6805-4c68-a6de-0fc009d5a6ba';

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService
  ) {}

  /**
   * Faz uma requisição http para consumir os dados do json conforme a url passada
   * @param jsonUrl
   */
  doRequest<People>(jsonUrl: string): Observable<Array<People>> {
    return this.httpClient.get<Array<People>>(jsonUrl).pipe(
      retry(2),
      catchError((error) => this.utilService.handleError(error))
    );
  }

  /**
   * Conforme o número da página passada define a url do json e faz a requisição http
   * @param page
   */
  getPeople<People>(page: number): Observable<Array<People>> {
    switch (page) {
      case 1:
        return this.doRequest(this.jsonPageOne);
      case 2:
        return this.doRequest(this.jsonPageTwo);
      case 3:
        return this.doRequest(this.jsonPageThree);
      case 3:
        return this.doRequest(this.jsonPageFour);
      case 4:
        return this.doRequest(this.jsonPageFive);
      default:
        return new Observable<Array<People>>();
    }
  }
}
