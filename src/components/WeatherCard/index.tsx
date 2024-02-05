import { useMemo } from "react";
import { getWeatherDescription } from "@/helpers/get-weather-description";
import { useFetchWeatherData } from "@/hooks/use-fetch-weather-data";
import { getWeatherIconClass } from "@/helpers/get-weather-icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  CardWrapperCss,
  IconCss,
  SectionCss,
} from "@/components/WeatherCard/WeatherCard.styles";
import { Row } from "@/components/WeatherCard/Row";
import { Error, Loading } from "@/components/Shared";

interface WeatherCardProps {
  lat?: number;
  lon?: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ lat, lon }) => {
  const { data: weatherData, loading, error } = useFetchWeatherData(lat, lon);

  const weatherDescription = useMemo(() => {
    if (!weatherData?.current.weather_code) return;
    return getWeatherDescription(weatherData?.current.weather_code);
  }, [weatherData]);

  const weatherIconClass = useMemo(() => {
    if (!weatherData?.current.weather_code) return;
    return getWeatherIconClass(weatherData?.current.weather_code);
  }, [weatherData]);

  const component = useMemo(() => {
    return (
      <>
        <SectionCss>
          <IconCss icon={`fa-solid ${weatherIconClass}` as IconProp} />
          <Row label={"Current conditions"} value={weatherDescription} />
        </SectionCss>
        <SectionCss>
          <Row
            label={"Current Temperature"}
            value={weatherData?.current.temperature_2m}
            extra={weatherData?.current_units.temperature_2m}
          />
          <Row
            label={"Wind Speed"}
            value={weatherData?.current.wind_speed_10m}
            extra={weatherData?.current_units.wind_speed_10m}
          />
        </SectionCss>
        <SectionCss>
          <Row
            label="Sunrise"
            value={weatherData?.daily.sunrise[0]}
            extra={weatherData?.timezone_abbreviation}
          />
          <Row
            label="Sunset"
            value={weatherData?.daily.sunset[0]}
            extra={weatherData?.timezone_abbreviation}
          />
        </SectionCss>
        <SectionCss>
          <Row
            label={"Elevetaion"}
            value={weatherData?.elevation}
            extra={"meters"}
          />
        </SectionCss>
      </>
    );
  }, [weatherData, weatherDescription, weatherIconClass]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!weatherData) return <div>No weather data available.</div>;
  return <CardWrapperCss>{component}</CardWrapperCss>;
};

export default WeatherCard;
