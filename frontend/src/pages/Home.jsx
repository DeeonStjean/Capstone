import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import weatherkey from "../weatherconfig";
const apikey = weatherkey;
export default function Home(props){
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
        getWeatherData(url);
      });
    }
  }, []);
  // get data from weather api
  const getWeatherData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
}