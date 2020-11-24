import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  planets = [];

  constructor(private swapiSvc: SwapiService
    , private bizLogicSvc: BizLogicService) {
    this.swapiSvc
      .fetchPlanets()
      .subscribe(

        data => this.planets = [
          ...this.planets
          , ...data
        ].map(x => ({
          ...x
          , displayColor: x.name == 'unknown' ? 'goldenrod' : 'inherit'
        })).sort((a, b) => a.name > b.name ? 1 : -1)
        , err => console.error(err)
      );
  }

  getDisplayColor(planet) {
    return planet.name == 'unknown' ? 'goldenrod' :
      planet.name == 'Tatooine' ?
      'green' :
      'inherit'
  }
}
