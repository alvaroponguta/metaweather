import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  url = 'https://www.metaweather.com/';

  getCityInfo(city: string): Observable<any> {
    return this.http.get(`${this.url}api/location/search/?query=${city}`)
      .pipe(
        catchError(this.handleError('getCityInfo', {}))
      );
  }

  getWeatherInfo(cityID: number): Observable<any> {
    return this.http.get(`${this.url}api/location/${cityID}/`)
      .pipe(
        catchError(this.handleError('getWeatherInfo', {}))
      );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(operation, error);

      return of(result as T);
    };
  }
}
