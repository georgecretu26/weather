import { useState, useEffect } from "react";
import { fetchWeatherData } from "../api/fetch-weather-data";
import { WeatherData } from "@/types";

export const useFetchWeatherData = (latitude?: number, longitude?: number) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchWeatherData(latitude, longitude)
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [latitude, longitude]);

  return { data, loading, error };
};
