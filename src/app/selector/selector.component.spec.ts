import { TestBed, async, inject } from '@angular/core/testing';
import { SelectorComponent } from './selector.component';
import { CitiesService } from '../cities.service';

describe('SelectorComponent', () => {
  let fixture, selectorComponent, spyEmitCityChanged, spyCheckCity, mockSecondCity;
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
  mockSecondCity = Object.assign({}, mockCity);
  mockSecondCity.title = 'Test Second City';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorComponent],
      providers: [CitiesService],
    }).compileComponents();
    fixture = TestBed.createComponent(SelectorComponent);
    selectorComponent = fixture.componentInstance;

    spyEmitCityChanged = spyOn(selectorComponent.cityChanged, 'emit');
    spyCheckCity = spyOn(selectorComponent, 'checkCity');

    selectorComponent.infoSelectedCity = mockCity;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(selectorComponent).toBeTruthy();
  });

  it('should delete the only city, check for changes and set city to undefined', async(inject([CitiesService], (citiesService: CitiesService) => {
    citiesService.addCity(mockCity);
    selectorComponent.deleteCity(mockCity);

    expect(spyCheckCity).toHaveBeenCalledWith(mockCity);
    expect(selectorComponent.cities.length).toEqual(0);
    //expect(selectorComponent.infoSelectedCity).toEqual(undefined);
    //expect(spyEmitCityChanged).toHaveBeenCalledWith(mockCity);
  })));

  it('should delete the selected city, check for changes and change the city', async(inject([CitiesService], (citiesService: CitiesService) => {
    citiesService.addCity(mockCity);
    citiesService.addCity(mockSecondCity);

    selectorComponent.deleteCity(mockCity);

    expect(spyCheckCity).toHaveBeenCalledWith(mockCity);
    expect(selectorComponent.cities.length).toEqual(1);
    //expect(selectorComponent.infoSelectedCity).toEqual(mockSecondCity);
    //expect(spyEmitCityChanged).toHaveBeenCalledWith(mockSecondCity);
  })));

  it('should delete a not selected city, check for changes and dont change the city', async(inject([CitiesService], (citiesService: CitiesService) => {
    citiesService.addCity(mockCity);
    citiesService.addCity(mockSecondCity);

    selectorComponent.deleteCity(mockSecondCity);

    expect(spyCheckCity).toHaveBeenCalledWith(mockSecondCity);
    expect(selectorComponent.cities.length).toEqual(1);
    expect(selectorComponent.infoSelectedCity).toEqual(mockCity);
    expect(spyEmitCityChanged).not.toHaveBeenCalled();
  })));

  it('should change the selected city if other city is selected', async(inject([CitiesService], (citiesService: CitiesService) => {
    citiesService.addCity(mockCity);
    citiesService.addCity(mockSecondCity);

    selectorComponent.selectCity(mockSecondCity);

    expect(selectorComponent.infoSelectedCity).toEqual(mockSecondCity);
    expect(spyEmitCityChanged).toHaveBeenCalledWith(mockSecondCity);
  })));

  it('should not change the selected city if the same city is selected', async(inject([CitiesService], (citiesService: CitiesService) => {
    citiesService.addCity(mockCity);
    citiesService.addCity(mockSecondCity);

    selectorComponent.selectCity(mockCity);

    expect(selectorComponent.infoSelectedCity).toEqual(mockCity);
    expect(spyEmitCityChanged).not.toHaveBeenCalled();
  })));
});
