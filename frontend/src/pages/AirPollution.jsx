import {useState, useEffect} from "react";
import Navbar from "../components/Searchbar.jsx";
import weatherkey from "../weatherconfig";
const apikey = weatherkey;
import MainWeatherCard from "../components/mainweathercard.jsx";
import TodayHighlights from "../components/todayhighlight.jsx";

export default function AirPollution(){
    const [city, setCity] = useState('London');
    const [airQuality, setAirQuality] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        getWeatherData(city)
    }, [city]);

    const getWeatherData = async (city) => {
        try{
            const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`);
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
            setAirQuality(data.list[0]);  
        } catch (error) {
          console.error('Error fetching the air quality data:', error);
        }
    };
    const handleSearch = (searchedCity) => {
        setCity(searchedCity); 
    };

    return(
        <>
        <div className="header">
            <h1>WEATHER APP</h1>
            <Navbar onSearch={handleSearch} />
        </div>
        <div>
      
        {weatherData && airQuality &&  (
        <div style={{ display: "flex", padding: "30px", gap: "20px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", flex: "0.5", gap: "20px" }}>
            <TodayHighlights weatherData={weatherData} airQualityData={airQuality}  />
          </div>
        </div>
        )}
    </div>
        </>
    )
}