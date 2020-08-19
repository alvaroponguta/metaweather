import { Component, Input, OnChanges } from '@angular/core';
import { Weather } from '../shared/weather.model';

@Component({
  selector: 'foo-aside-weather',
  templateUrl: './aside-weather.component.html',
  styleUrls: ['./aside-weather.component.scss']
})
export class AsideWeatherComponent implements OnChanges {
  @Input() weatherInfo: Weather;
  logoWeather: string;
  logoWindDirection = 'https://www.metaweather.com/static/img/windarrow.svg';

  ngOnChanges(): void {
    this.weatherInfo.max_temp = Math.round(this.weatherInfo.max_temp);
    this.weatherInfo.min_temp = Math.round(this.weatherInfo.min_temp);
    this.weatherInfo.wind_speed = Math.round(this.weatherInfo.wind_speed);
    this.weatherInfo.humidity = Math.round(this.weatherInfo.humidity);
    this.weatherInfo.visibility = Math.round(this.weatherInfo.visibility * 10) / 10;
    this.weatherInfo.air_pressure = Math.round(this.weatherInfo.air_pressure);
    this.weatherInfo.predictability = Math.round(this.weatherInfo.predictability);
    this.logoWeather = `https://www.metaweather.com/static/img/weather/${this.weatherInfo.weather_state_abbr}.svg`;
  }

  directionArrow(directionArrow: string): any {
    let degrees = 0;
    const comparator = (direction, directionToComparate) =>
      direction.match(new RegExp(`(.*[${directionToComparate}]){2}`)) !== null;

    switch (true) {
      case directionArrow === 'N':
        degrees = 180;
        break;
      case directionArrow === 'W':
        degrees = 90;
        break;
      case directionArrow === 'E':
        degrees = 270;
        break;
      case comparator(directionArrow, 'NW'):
        degrees = 135;
        break;
      case comparator(directionArrow, 'NE'):
        degrees = 225;
        break;
      case comparator(directionArrow, 'SW'):
        degrees = 45;
        break;
      case comparator(directionArrow, 'SE'):
        degrees = 315;
        break;
    }

    return {
      transform: `rotate(${degrees}deg)`
    };
  }
}
