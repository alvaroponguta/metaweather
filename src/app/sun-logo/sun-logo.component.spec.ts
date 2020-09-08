import { TestBed, async } from '@angular/core/testing';
import { SunLogoComponent } from './sun-logo.component';

describe('SunLogoComponent', () => {
  let fixture, sunLogoComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SunLogoComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(SunLogoComponent);
    sunLogoComponent = fixture.componentInstance;

    sunLogoComponent.sunImagePath = 'sunpath.jpg';
    sunLogoComponent.hourSun = '06:00am';
    sunLogoComponent.title = 'Sunrise';
    sunLogoComponent.borderRadius = '50px';

    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(sunLogoComponent).toBeTruthy();
  });

  it('should set the bottom left radius if the title is Sunset', () => {
    expect(sunLogoComponent.radiusSide()).toEqual({
      'border-bottom-left-radius':  sunLogoComponent.borderRadius,
    });
  });

  it('should set the bottom right radius if the title is Sunrise', () => {
    sunLogoComponent.title = 'Sunset';
    fixture.detectChanges();

    expect(sunLogoComponent.radiusSide()).toEqual({
      'border-bottom-right-radius':  sunLogoComponent.borderRadius,
    });
  });
});
