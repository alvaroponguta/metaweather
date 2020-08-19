import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { City } from './shared/city.model';
import { CitiesService } from './cities.service';

@Component({
  selector: 'foo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  infoSelectedCity: City;
  errorCity = false;
  cities: City[] =  [];

  constructor(private weatherService: WeatherService, private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
    this.citiesService.citiesChanged
      .subscribe(
        (cities: City[]) => {
          this.cities = cities;
        }
      );
  }

  async onSelectedCity(city: string): Promise<any> {
    const cityId = await this.weatherService.getCityInfo(city).toPromise();

    if (cityId.length !== 0) {
      this.errorCity = false;
      this.infoSelectedCity = await this.weatherService.getWeatherInfo(cityId[0].woeid).toPromise();
      this.citiesService.addCity(this.infoSelectedCity);
    } else {
      this.errorCity = true;
    }
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
    }
  }

  selectCity(city: City): void {
    this.infoSelectedCity = city;
  }
}
