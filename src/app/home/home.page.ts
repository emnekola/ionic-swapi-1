import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private swapiSvc: SwapiService) {
    this.swapiSvc
      .fetchPlanets()
      .subscribe(
        data => console.log(data)
        , err => console.error(err)
      );
  }
}
