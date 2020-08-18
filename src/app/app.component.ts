import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { City } from './shared/city.model';

@Component({
  selector: 'foo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  infoSelectedCity: City;
  errorCity = false;

  constructor(private weatherService: WeatherService) { }

  async onSelectedCity(city: string): Promise<any> {
    const cityId = await this.weatherService.getCityInfo(city).toPromise();

    if (cityId.length !== 0) {
      this.errorCity = false;
      this.infoSelectedCity = await this.weatherService.getWeatherInfo(cityId[0].woeid).toPromise();
    } else {
      this.errorCity = true;
      this.infoSelectedCity = undefined;
    }
  }
}
