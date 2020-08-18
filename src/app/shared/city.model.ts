import { Weather } from './weather.model';

export interface City {
  consolidated_weather: Weather[];
  title: string;
  parent: {
    title: string
  };
  timezone: string;
  sun_rise: string;
  sun_set: string;
}
