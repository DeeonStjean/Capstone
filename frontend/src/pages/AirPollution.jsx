import {useState, useEffect} from "react";
import weatherkey from "../weatherconfig";
const apikey = weatherkey;
import MainWeatherCard from "../components/mainweathercard.jsx";

export default function AirPollution(){
    const [city, setCity] = useState('London');
    const [airQuality, setAirQuality] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        getWeatherData(city)
    }, [city]);

    const getWeatherData = async (city) => {
        try{
            const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
            const data = await response.json();   
            setWeatherData(data);     
            fetchAirQuality(data.coord.lat, data.coord.lon);
        } catch (error){
            console.error('Error fetching the weather data:', error)
        }          
    }

    const fetchAirQuality = async (lat, lon) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apikey}`);
            const data = await response.json();
            console.log(data);  
        } catch (error) {
          console.error('Error fetching the air quality data:', error);
        }

          //weatherReport(Data);
          //setWeatherData(Data);
          // Send data to backend for storage
          //saveWeatherData(data);
        //setCity('');
      };
      
    return(
        <>
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
        <div>
      
      
        <div style={{ display: "flex", padding: "30px", gap: "20px" }}>
          <div style={{ flex: "1", marginRight: "10px" }}>
            <MainWeatherCard weatherData={weatherData} />
            <p style={{ fontWeight: "700", fontSize: "20px", marginTop: "20px" }}>5 Days Forecast</p>
            
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: "0.5", gap: "20px" }}>
            
            
          </div>
        </div>
     
    </div>
        </>
    )
}