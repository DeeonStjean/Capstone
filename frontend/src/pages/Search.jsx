import {useState, useEffect} from "react";
import weatherkey from "../weatherconfig";
const apikey = weatherkey;
export default function Search(props){
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const searchByCity = async () => {
        try {
          const urlsearch = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
          const response = await fetch(urlsearch);
          weatherData = await response.json();
          console.log(weatherData);
          weatherReport(weatherData);
          setWeatherData(weatherData);
          // Send data to backend for storage
          //saveWeatherData(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
        setCity('');
      };
    
    return(
        <div className="background">
            <div className="header">
                <h1>WEATHER APP</h1>
                <div>
                    <input
                    type="text"
                    name=""
                    id="input"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                    <button id="search" /*onClick={searchByCity}*/>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}