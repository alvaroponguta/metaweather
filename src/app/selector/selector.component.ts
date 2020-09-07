import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../shared/city.model';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'foo-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  @Output() cityChanged = new EventEmitter<City>();
  @Input() infoSelectedCity: City;
  cities: City[] =  [];

  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
    this.citiesService.citiesChanged
      .subscribe(
        (cities: City[]) => {
          this.cities = cities;
        }
      );
  }

  deleteCity(city: City): void {
    this.citiesService.deleteCity(city);
    this.checkCity(city);
  }

  checkCity(city: City): void {
    if (city === this.infoSelectedCity) {
      if (this.cities.length > 0) {
        for (const cityToSelect of this.cities) {
          if (cityToSelect !== city) {
            this.infoSelectedCity = cityToSelect;
          }
        }
      } else {
        this.infoSelectedCity = undefined;
      }
      this.cityChanged.emit(this.infoSelectedCity);
    }
  }

  selectCity(city: City): void {
    if (city !== this.infoSelectedCity) {
      this.infoSelectedCity = city;
      this.cityChanged.emit(this.infoSelectedCity);
    }
  }
}
