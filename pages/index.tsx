import { WeatherData } from "@/types/";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloud,
  faSun,
  faCloudSun,
  faSmog,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudMeatball,
  faIcicles,
  faSnowflake,
  faBold,
} from "@fortawesome/free-solid-svg-icons";
import { SearchLocation } from "@/components";
import { useState } from "react";

import dynamic from "next/dynamic";
import styled from "styled-components";
const WeatherCard = dynamic(() => import("@/components/WeatherCard"));

config.autoAddCss = false;
library.add(
  faCloud,
  faSun,
  faCloudSun,
  faSmog,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudMeatball,
  faIcicles,
  faSnowflake,
  faBold
);
interface Props {
  weatherData: WeatherData;
}

const HomePage: React.FC<Props> = ({}) => {
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
    displayName: null,
    countryCode: null,
  });

  return (
    <WrapperCss style={{ textAlign: "center" }}>
      <h1>Weather Dashboard</h1>
      <Content>
        <SearchLocation onLocationSelected={setLocation} />
        {location.lat &&
          location.lon &&
          location.displayName &&
          location.countryCode && (
            <WeatherCard
              lat={location.lat}
              lon={location.lon}
              displayName={location.displayName}
              countryCode={location.countryCode}
            />
          )}
      </Content>
    </WrapperCss>
  );
};

const WrapperCss = styled.div`
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default HomePage;
