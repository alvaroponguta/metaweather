import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let fixture, app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should initialize attributes correctly', () => {
    expect(app.errorCity).toBeFalse();
    expect(app.infoSelectedCity).toBeUndefined();
  });

  // Jasmine timeout
  xit('should asign a city', async (done: DoneFn) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    await app.onSelectedCity('London');
    expect(app.errorCity).toBeFalse();
    expect(app.infoSelectedCity).toBeDefined();

    done();
  });
});
