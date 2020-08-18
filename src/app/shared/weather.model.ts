export interface Weather {
    weather_state_name: string;
    weather_state_abbr: string;
    min_temp: number;
    max_temp: number;
    the_temp: number;
    wind_speed: number;
    air_pressure: number;
    humidity: number;
    visibility: number;
    predictability: number;
    wind_direction_compass: string;
}
