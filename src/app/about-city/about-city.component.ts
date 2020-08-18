import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'foo-about-city',
  templateUrl: './about-city.component.html',
  styleUrls: ['./about-city.component.scss']
})
export class AboutCityComponent implements OnChanges {
  @Input() infoSelectedCity: any;
  cityImagePath = 'https://openweathermap.org/themes/openweathermap/assets/img/new-history-forecast-bulk.png';
  sunsetImagePath = 'https://icons-for-free.com/iconfiles/png/512/sun+sunset+weather+icon-1320196636209475292.png';
  sunriseImagePath = 'https://icons-for-free.com/iconfiles/png/512/sun+sunrise+weather+icon-1320196637098579511.png';
  hourSunrise: string;
  hourSunset: string;
  flagPath: string;

  ngOnChanges(): void {
    const { timezone } = this.infoSelectedCity;
    const sunriseDate = new Date(this.infoSelectedCity.sun_rise);
    const sunsetDate = new Date(this.infoSelectedCity.sun_set);
    const dateOptions = {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit'
    };

    this.hourSunrise = sunriseDate.toLocaleString('en-US', dateOptions);
    this.hourSunset = sunsetDate.toLocaleString('en-US', dateOptions);
    this.flagPath = `https://www.countries-ofthe-world.com/flags-normal/flag-of-${this.infoSelectedCity.parent.title}.png`;
  }
}
