import { WeatherData } from "@/types";
import axios from "axios";

export const fetchWeatherData = async (
  lat?: number,
  lon?: number
): Promise<WeatherData> => {
  const url = `https://api.open-meteo.com/v1/forecast`;

  const params = {
    latitude: lat || 52.52,
    longitude: lon || 13.41,
    current: "temperature_2m,apparent_temperature,weather_code,wind_speed_10m",
    hourly:
      "temperature_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,visibility,is_day",
    daily: "sunrise,sunset",
    timezone: "Europe/Berlin",
    forecast_hours: 24,
  };

  try {
    const { data } = await axios.get<WeatherData>(url, { params });
    return data;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};
