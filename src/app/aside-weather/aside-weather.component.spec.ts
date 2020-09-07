import { TestBed, async } from '@angular/core/testing';
import { AsideWeatherComponent } from './aside-weather.component';

describe('AsideWeatherComponent', () => {
  let fixture, asideWeatherComponent;
  const mockWeather = {
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
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsideWeatherComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AsideWeatherComponent);
    asideWeatherComponent = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(asideWeatherComponent).toBeTruthy();
  });

  it('should initialize correctly', () => {
    expect(asideWeatherComponent.weatherInfo).toEqual(undefined);
    expect(asideWeatherComponent.logoWeather).toEqual(undefined);
    expect(asideWeatherComponent.logoWindDirection).toEqual('https://www.metaweather.com/static/img/windarrow.svg');
  });

  it('should render the component if weather is defined', () => {
    asideWeatherComponent.weatherInfo = mockWeather;
    fixture.detectChanges();

    asideWeatherComponent.ngOnChanges();

    expect(asideWeatherComponent.logoWeather).toEqual('https://www.metaweather.com/static/img/weather/hc.svg');
  });

  describe('should return the correct degrees for', () => {
    it('N direction', () => {
      expect(asideWeatherComponent.directionArrow('N')).toEqual({
        transform: 'rotate(180deg)'
      });
    });

    it('W direction', () => {
      expect(asideWeatherComponent.directionArrow('W')).toEqual({
        transform: 'rotate(90deg)'
      });
    });

    it('E direction', () => {
      expect(asideWeatherComponent.directionArrow('E')).toEqual({
        transform: 'rotate(270deg)'
      });
    });

    it('S direction', () => {
      expect(asideWeatherComponent.directionArrow('S')).toEqual({
        transform: 'rotate(0deg)'
      });
    });

    it('NNW direction', () => {
      expect(asideWeatherComponent.directionArrow('NNW')).toEqual({
        transform: 'rotate(135deg)'
      });
    });

    it('NE direction', () => {
      expect(asideWeatherComponent.directionArrow('NE')).toEqual({
        transform: 'rotate(225deg)'
      });
    });

    it('WSW direction', () => {
      expect(asideWeatherComponent.directionArrow('WSW')).toEqual({
        transform: 'rotate(45deg)'
      });
    });

    it('SSE direction', () => {
      expect(asideWeatherComponent.directionArrow('SSE')).toEqual({
        transform: 'rotate(315deg)'
      });
    });
  });
});
