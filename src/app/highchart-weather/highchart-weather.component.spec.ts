/* import { TestBed, async } from '@angular/core/testing';
import { HighchartWeatherComponent } from './highchart-weather.component';

describe('HighchartWeatherComponent', () => {
  let fixture, highchartWeatherComponent;
  const mockWeather = [{
    weather_state_name: 'Heavy Cloud',
    weather_state_abbr: 'hc',
    min_temp: 12.5674,
    max_temp: 20.54,
    the_temp: 20.18,
    wind_speed: 5.9768,
    air_pressure: 1023,
    humidity: 64,
    visibility: 10.2345,
    predictability: 71,
    wind_direction_compass: 'WSW'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HighchartWeatherComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(HighchartWeatherComponent);
    highchartWeatherComponent = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(highchartWeatherComponent).toBeTruthy();
  });

  it('should initialize correctly', () => {
    expect(highchartWeatherComponent.cityWeather).toEqual(undefined);
    expect(highchartWeatherComponent.cityName).toEqual(undefined);
    expect(highchartWeatherComponent.updateFlag).toEqual(false);
  });

  it('should render the component if weather is defined', () => {
    highchartWeatherComponent.cityWeather = mockWeather;
    highchartWeatherComponent.cityName = 'Test City';
    fixture.detectChanges();

    highchartWeatherComponent.ngOnChanges();

    expect(highchartWeatherComponent.chartOptions.title.text).toEqual('Test City Temperature');
    expect(highchartWeatherComponent.updateFlag).toEqual(true);
  });
});
 */
