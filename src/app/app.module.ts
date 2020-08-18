import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutCityComponent } from './about-city/about-city.component';
import { AsideWeatherComponent } from './aside-weather/aside-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { SunLogoComponent } from './sun-logo/sun-logo.component';
import { HighchartWeatherComponent } from './highchart-weather/highchart-weather.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CityFormComponent } from './city-form/city-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutCityComponent,
    AsideWeatherComponent,
    SunLogoComponent,
    HighchartWeatherComponent,
    CityFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
