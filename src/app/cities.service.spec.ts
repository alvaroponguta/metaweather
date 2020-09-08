import { TestBed } from '@angular/core/testing';
import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  let citiesService: CitiesService, spyEmitCities;
  const mockCity = {
    consolidated_weather: [],
    title: 'Test City',
    parent: {
      title: 'Test Country'
    },
    timezone: 'Test Timezone',
    sun_rise: '06:00 Test Timezone',
    sun_set: '18:00 Test Timezone'
  }

  beforeEach(() => {
    citiesService = TestBed.inject(CitiesService);
    spyEmitCities = spyOn(citiesService.citiesChanged, 'emit');
  });

  it('should be created', () => {
    expect(citiesService).toBeTruthy();
    expect(citiesService.cities.length).toBe(0);
    expect(spyEmitCities).not.toHaveBeenCalled();
  });

  it('should add a city to the array of cities', () => {
    citiesService.addCity(mockCity);
    expect(citiesService.cities[0]).toEqual(mockCity);
  });

  it('should return the array of cities with one city', () => {
    citiesService.addCity(mockCity);
    expect(citiesService.getCities().length).toBe(1);
    expect(citiesService.getCities()).toEqual([mockCity]);
  });

  it('should delete city and emit with the new array', () => {
    citiesService.addCity(mockCity);
    citiesService.deleteCity(mockCity);
    expect(citiesService.cities.length).toBe(0);
    expect(spyEmitCities).toHaveBeenCalledWith([]);
  });

  it('should delete the specific city in the array and emit the new array', () => {
    let mockSecondCity = Object.assign({}, mockCity);
    let mockThirdCity = Object.assign({}, mockCity);

    mockSecondCity.title = 'Test Second City';
    mockThirdCity.title = 'Test Third City';

    citiesService.addCity(mockCity);
    citiesService.addCity(mockSecondCity);
    citiesService.addCity(mockThirdCity);

    citiesService.deleteCity(mockSecondCity);
    expect(citiesService.cities.some(city => city === mockSecondCity)).toBeFalse();
    expect(citiesService.cities.length).toBe(2);
    expect(spyEmitCities).toHaveBeenCalledWith([mockCity, mockThirdCity]);
  });
});
