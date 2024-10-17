import {useState, useEffect} from "react";
import weatherkey from "../weatherconfig";
import axios from 'axios';
const apikey = weatherkey;
export default function Search(props){
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  
  const weatherReport = async (data) => {
    const urlcast = `http://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${apikey}`;
      try {
        const response = await fetch(urlcast);
        const forecast = await response.json();
        console.log(forecast.city);
        hourForecast(forecast);
        //dayForecast(forecast);
        
        console.log(data);
        document.getElementById('city').innerText = data.name + ', ' + data.sys.country;
        console.log(data.name, data.sys.country);
        
        console.log(Math.floor(data.main.temp - 273));
        document.getElementById('temperature').innerText = Math.floor(data.main.temp - 273) + ' °C';
        
        document.getElementById('clouds').innerText = data.weather[0].description;
        console.log(data.weather[0].description);
        
        let icon1 = data.weather[0].icon;
        let iconurl = "http://api.openweathermap.org/img/w/" + icon1 + ".png";
        document.getElementById('img').src = iconurl;
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
  };
  
  const hourForecast = (forecast) => {
    document.querySelector('.templist').innerHTML = '';
    for (let i = 0; i < 5; i++) {
      var date = new Date(forecast.list[i].dt * 1000);
      console.log((date.toLocaleTimeString(undefined, 'Asia/Kolkata')).replace(':00', ''));
    
      let hourR = document.createElement('div');
      hourR.setAttribute('class', 'next');
    
      let div = document.createElement('div');
      let time = document.createElement('p');
      time.setAttribute('class', 'time');
      time.innerText = (date.toLocaleTimeString(undefined, 'Asia/Kolkata')).replace(':00', '');
    
      let temp = document.createElement('p');
      temp.innerText = Math.floor((forecast.list[i].main.temp_max - 273)) + ' °C' + ' / ' + Math.floor((forecast.list[i].main.temp_min - 273)) + ' °C';
    
      div.appendChild(time);
      div.appendChild(temp);
    
      let desc = document.createElement('p');
      desc.setAttribute('class', 'desc');
      desc.innerText = forecast.list[i].weather[0].description;
    
      hourR.appendChild(div);
      hourR.appendChild(desc);
      document.querySelector('.templist').appendChild(hourR);
    }
  };
  //search for city 
  const searchByCity = async () => {
    try {
      const urlsearch = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
      const response = await fetch(urlsearch);
      const Data = await response.json();
      console.log(Data);
      weatherReport(Data);
      setWeatherData(Data);
      // Send data to backend for storage
      saveWeatherData(Data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
    setCity('');
  };
  const saveWeatherData = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/weather', {
        city: data.name,
        country: data.sys.country,
        temperature: Math.floor(data.main.temp - 273),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });
      console.log('Weather data saved to database:', response.data);
    } catch (error) {
      console.error('Error saving weather data to database:', error);
    }
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
          <button id="search" onClick={searchByCity}>
            Search
          </button>
        </div>
      </div>
      <main>
        <div className="weather">
          <h2 id="city">Delhi,IN</h2>
          <div className="temp-box">
            <img src="/weathericon.png" alt="" id="img" />
            <p id="temperature">26 °C</p>
          </div>
          <span id="clouds">Broken Clouds</span>
        </div>

        <div className="divider1"></div>

        <div className="forecstH">
          <p className="cast-header">Upcoming forecast</p>
          <div className="templist">
            {/* Hourly forecast will be rendered here */}
          </div>
        </div>
      </main>
    </div>
  );
}