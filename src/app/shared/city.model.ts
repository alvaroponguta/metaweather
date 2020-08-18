import { Weather } from './weather.model';

export interface City {
  consolidated_weather: Weather[];
  title: string;
}
