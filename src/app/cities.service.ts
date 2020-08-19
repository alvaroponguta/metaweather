import { Injectable, EventEmitter } from '@angular/core';
import { City } from './shared/city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  citiesChanged = new EventEmitter<City[]>();
  cities: City[] = [];

  addCity(city: City): void {
    this.cities.push(city);
  }

  getCities(): City[] {
    return this.cities;
  }

  deleteCity(cityToDelete: City): void {
    this.cities = this.cities.filter(city => city !== cityToDelete);
    this.citiesChanged.emit(this.cities);
  }
}
