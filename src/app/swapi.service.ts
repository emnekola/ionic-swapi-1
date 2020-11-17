import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { pipe, merge, race, EMPTY } from 'rxjs';
import { tap, map, repeat, expand } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  fetchPlanets() {
    return this.httpSvc.get("https://swapi.dev/api/planets/").pipe(
      tap(x => console.log(x))
      , repeat(3)
      , tap(x => console.info(x))
    );
  }
}
