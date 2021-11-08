import { Injectable } from '@angular/core';
import { RequestPlants } from '../interfaces/IRequests';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  getPlants(body: RequestPlants) {
    var request = new XMLHttpRequest();
    request.open(
      "get",
      `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${body.sun}&water=${body.water}&pets=${body.pets}`,
      true
    );
    request.send();

    request.onload =  function () {
      return JSON.parse(request.response);
    };
  }
}
