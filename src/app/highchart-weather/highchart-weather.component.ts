import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Weather} from '../shared/weather.model';

@Component({
  selector: 'foo-highchart-weather',
  templateUrl: './highchart-weather.component.html',
  styleUrls: ['./highchart-weather.component.scss']
})
export class HighchartWeatherComponent implements OnChanges {
  @Input() cityWeather: Weather[];
  @Input() cityName: string;
  updateFlag = false;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions = {
    title: {
      text: 'City Temperature'
    },
    xAxis: {
      categories: this.generateDays()
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      }
    },
    series: [{
      data: [],
      type: 'line',
      name: 'Temperature',
      color: '#43E120'
    },
    {
      data: [],
      type: 'line',
      name: 'Max. Temperature',
      color: '#E12020'
    },
    {
      data: [],
      type: 'line',
      name: 'Min. Temperature',
      color: '#2092E1'
    }]
  };

  constructor() { }

  ngOnChanges(): void {
    const matrixTemperatures = this.getTemperatures();
    let counter = 0;

    this.chartOptions.title.text = `${this.cityName} Temperature`;

    for (const temperatures of matrixTemperatures) {
      this.chartOptions.series[counter].data = temperatures;
      counter++;
    }

    this.updateFlag = true;
  }

  generateDays(): string[] {
    const todayDate = new Date();
    const daysArray = [
      'Today',
      'Tomorrow'
    ];
    let month, day;

    todayDate.setDate(todayDate.getDate() + 1);

    for (let dayCount = 2; dayCount < 6; dayCount++) {
      todayDate.setDate(todayDate.getDate() + 1);
      month = todayDate.toLocaleString('default', { month: 'long' });
      day = todayDate.getDate();

      daysArray[dayCount] = `${month} ${day}`;
    }

    return daysArray;
  }

  getTemperatures(): number[][] {
    const matrixTemperatures = [];
    const temperatureArray = [];
    const maxTemperatureArray = [];
    const minTemperatureArray = [];
    let counter = 0;

    for (const weather of this.cityWeather) {
      temperatureArray[counter] = Math.round(weather.the_temp);
      maxTemperatureArray[counter] = Math.round(weather.max_temp);
      minTemperatureArray[counter] = Math.round(weather.min_temp);
      counter++;
    }

    matrixTemperatures[0] = temperatureArray;
    matrixTemperatures[1] = maxTemperatureArray;
    matrixTemperatures[2] = minTemperatureArray;

    return matrixTemperatures;
  }
}
