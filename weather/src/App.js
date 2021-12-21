import React, { useState } from "react";
import styled from "styled-components";
import CityComponent from "./Modules/CityComponent";
import WeatherComponent from "./Modules/WeatherComponent";
import Axios from "axios";
import './index.css';


const API_KEY = "095b135c3fb5d4fa96307a498bd267f7"

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
  margin-top: 10px;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
// const CloseButton = styled.span`
//   padding: 2px 3px;
//   background-color: black;
//   border-radius: 50%;
//   color: white;
//   position: absolute;
// `;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  //getting data from the API
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    );
    updateWeather(response.data);
    console.log(response);
  };
  return (
    <div className="App">
      <Container>
      <AppLabel>React Weather App</AppLabel>

        {weather? <WeatherComponent weather={weather} /> : <CityComponent
         updateCity={updateCity}
        fetchWeather={fetchWeather}
          />}
        
      </Container>
    
    </div>
  );
}

export default App;


//  {weather? <WeatherComponent />: <CityComponent
// updateCity={updateCity}
// fetchWeather={fetchWeather}
//   />}

/**this mean' if there is waether, show the weather component but if no weather 
 * show the citycomponent'
 */