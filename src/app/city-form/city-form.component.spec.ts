import { TestBed, async } from '@angular/core/testing';
import { CityFormComponent } from './city-form.component';

describe('CityFormComponent', () => {
  let fixture, cityFormComponent, spyCityWasSelected;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityFormComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(CityFormComponent);
    cityFormComponent = fixture.componentInstance;

    spyCityWasSelected = spyOn(cityFormComponent.cityWasSelected, 'emit');
  }));

  it('should create the component', () => {
    expect(cityFormComponent).toBeTruthy();
  });

  it('should emit message on city selected', () => {
    cityFormComponent.onCitySelected();

    expect(spyCityWasSelected).toHaveBeenCalledWith(cityFormComponent.cityTextRef.nativeElement.value);
  });
});
