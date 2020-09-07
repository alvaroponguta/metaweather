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
  }));

  it('should create the component', () => {
    expect(sunLogoComponent).toBeTruthy();
  });

  it('should initialize with the correct inputs', () => {
    sunLogoComponent.sunImagePath = 'sunpath.jpg';
    sunLogoComponent.hourSun = '06:00am';
    sunLogoComponent.title = 'Sunrise';

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h3').innerText).toEqual('Sunrise');
    expect(fixture.nativeElement.querySelector('img').src).toEqual('http://localhost:9877/sunpath.jpg');
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual('06:00am');
  });
});
