import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { City } from '../shared/city.model';

@Component({
  selector: 'foo-about-city',
  templateUrl: './about-city.component.html',
  styleUrls: ['./about-city.component.scss']
})
export class AboutCityComponent implements OnChanges {
  @Input() infoSelectedCity: City;
  @Input() cities: City[];
  @Output() cityWasDeleted = new EventEmitter<City>();
  @Output() cityWasSelected = new EventEmitter<City>();
  cityImagePath = 'https://openweathermap.org/themes/openweathermap/assets/img/new-history-forecast-bulk.png';
  sunsetImagePath = 'https://icons-for-free.com/iconfiles/png/512/sun+sunset+weather+icon-1320196636209475292.png';
  sunriseImagePath = 'https://icons-for-free.com/iconfiles/png/512/sun+sunrise+weather+icon-1320196637098579511.png';
  hourSunrise: string;
  hourSunset: string;
  flagPath: string;

  ngOnChanges(): void {
    const { timezone, sun_rise, sun_set } = this.infoSelectedCity;
    const sunriseDate = new Date(sun_rise);
    const sunsetDate = new Date(sun_set);
    const dateOptions = {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit'
    };

    this.hourSunrise = sunriseDate.toLocaleString('en-US', dateOptions);
    this.hourSunset = sunsetDate.toLocaleString('en-US', dateOptions);
    this.flagPath = `https://www.countries-ofthe-world.com/flags-normal/flag-of-${this.infoSelectedCity.parent.title}.png`;
  }

  onClickDeleteCity(city: City): void {
    this.cityWasDeleted.emit(city);
  }

  onClickCity(city: City): void {
    this.cityWasSelected.emit(city);
  }
}
