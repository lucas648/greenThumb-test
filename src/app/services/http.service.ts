import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { RequestPlants } from '../interfaces/IRequests';
import {
  catchError,
  map,
  mergeMap,
  retry,
  switchMap,
  tap,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  async getPlants(body: RequestPlants) {
    return this.http.get(`https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${body.sun}&water=${body.water}&pets=${body.pets}`).pipe(
      retry(1),
      map((data:any) =>{
        return data;
      }),
      catchError(err => {
        console.error('catchError', err.error);
        return throwError(err);
    }),
    )
  }
}
