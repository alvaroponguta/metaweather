import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { City } from './shared/city.model';
import { CitiesService } from './cities.service';

@Component({
  selector: 'foo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  infoSelectedCity: City;
  errorCity = false;

  constructor(private weatherService: WeatherService, private citiesService: CitiesService) { }

  async onSelectedCity(city: string): Promise<any> {
    const cityId = await this.weatherService.getCityInfo(city).toPromise();
    const cities = this.citiesService.getCities();

    if (cityId.length !== 0) {
      if (!cities.find(cityToFind => cityToFind.title === cityId[0].title)) {
        this.errorCity = false;
        this.infoSelectedCity = await this.weatherService.getWeatherInfo(cityId[0].woeid).toPromise();
        this.citiesService.addCity(this.infoSelectedCity);
      } else {
        this.errorCity = true;
      }
    } else {
      this.errorCity = true;
    }
  }
}
