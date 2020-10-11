// angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// services
import { UtilService } from './../../../core/services/util.service';

// interface
import { People } from './../models/people.interface';

// rxjs
import { Observable } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class PeoplesService {

  jsonUrl: string = "https://run.mocky.io/v3/5e180889-beaf-49a7-912e-ec6e1f6a0a00";

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService
  ) {}

  getAll<People>(): Observable<Array<People>> {
    return this.httpClient
      .get<Array<People>>(this.jsonUrl)
      .pipe(retry(2), catchError(error => this.utilService.handleError(error)));
  }

}
