import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.url).toEqual('https://www.metaweather.com/');
  });

  // Jasmine timeout
  xit('#getCityInfo should return information about the city from observable',
    (done: DoneFn) => {
      service.getCityInfo('London').subscribe(cityInfo => {
        expect(cityInfo[0].title).toBe('London');
        expect(cityInfo[0].woeid).toBe(44418);
        done();
      });
  });

  // Jasmine timeout
  xit('#getWeatherInfo should return information about the weather, country and timezone from observable',
    (done: DoneFn) => {
      service.getWeatherInfo(44418).subscribe(cityInfo => {
        expect(cityInfo.consolidated_weather.length).toBe(6);
        expect(cityInfo.parent.title).toBe('England');
        expect(cityInfo.timezone).toBe('Europe/London');
        done();
      });
  });
});
