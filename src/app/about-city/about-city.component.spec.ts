import { TestBed, async } from '@angular/core/testing';
import { AboutCityComponent } from './about-city.component';

describe('AboutCityComponent', () => {
  let fixture, aboutCityComponent;
  const mockCity = {
    consolidated_weather: [],
    title: 'London',
    parent: {
      title: 'England'
    },
    timezone: 'Europe/London',
    sun_rise: '2020-09-07T06:23:13.084794+01:00',
    sun_set: '2020-09-07T19:32:26.178801+01:00'
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCityComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AboutCityComponent);
    aboutCityComponent = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(aboutCityComponent).toBeTruthy();
  });

  it('should initialize correctly', () => {
    expect(aboutCityComponent.infoSelectedCity).toBeUndefined();
    expect(aboutCityComponent.cityImagePath).toBe('https://openweathermap.org/themes/openweathermap/assets/img/new-history-forecast-bulk.png');
    expect(aboutCityComponent.sunsetImagePath).toBe('https://icons-for-free.com/iconfiles/png/512/sun+sunset+weather+icon-1320196636209475292.png');
    expect(aboutCityComponent.sunriseImagePath).toBe('https://icons-for-free.com/iconfiles/png/512/sun+sunrise+weather+icon-1320196637098579511.png');
    expect(aboutCityComponent.hourSunrise).toBeUndefined();
    expect(aboutCityComponent.hourSunset).toBeUndefined();
    expect(aboutCityComponent.flagPath).toBeUndefined();
  });

  it('should assign hour sunrise, hor sunset and flagpath on city selected', () => {
    aboutCityComponent.infoSelectedCity = mockCity;
    fixture.detectChanges();

    aboutCityComponent.ngOnChanges();

    expect(aboutCityComponent.infoSelectedCity).toEqual(mockCity);
    expect(aboutCityComponent.hourSunrise).toBe('6:23 AM');
    expect(aboutCityComponent.hourSunset).toBe('7:32 PM');
    expect(aboutCityComponent.flagPath).toBe('https://www.countries-ofthe-world.com/flags-normal/flag-of-England.png');
  });
});
