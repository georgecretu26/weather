export interface CurrentWeather {
  time: string;
  temperature_2m: number;
  apparent_temperature: number;
  weather_code: number;
  wind_speed_10m: number;
}

export interface CurrentWeatherUnits {
  time: string;
  temperature_2m: string;
  apparent_temperature: string;
  weather_code: string;
  wind_speed_10m: string;
}

interface DailySun {
  sunrise: string[];
  sunset: string[];
}

export interface WeatherData {
  latitude: number;
  longitude: number;
  timezone: string;
  elevation: number;
  current: CurrentWeather;
  current_units: CurrentWeatherUnits;
  daily: DailySun;
  timezone_abbreviation: string;
}

export interface WeatherCodeDescription {
  [key: number]: string;
}
