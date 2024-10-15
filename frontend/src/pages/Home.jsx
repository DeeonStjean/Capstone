import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import weatherkey from "../weatherconfig";
const apikey = weatherkey;
export default function Home(props){
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
      weatherReport(data);
      setWeatherData(data);
      // Send data to backend for storage
      //saveWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  const weatherReport = async (data) => {
    const urlcast = `http://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${apikey}`;
    try {
      const response = await fetch(urlcast);
      const forecast = await response.json();
      console.log(forecast.city);
      hourForecast(forecast);
      dayForecast(forecast);
    
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
  const dayForecast = (forecast) => {
    document.querySelector('.weekF').innerHTML = '';
    for (let i = 8; i < forecast.list.length; i += 8) {
      console.log(forecast.list[i]);
      let div = document.createElement('div');
      div.setAttribute('class', 'dayF');

      let day = document.createElement('p');
      day.setAttribute('class', 'date');
      day.innerText = new Date(forecast.list[i].dt * 1000).toDateString(undefined, 'Asia/Kolkata');
      div.appendChild(day);

      let temp = document.createElement('p');
      temp.innerText = Math.floor((forecast.list[i].main.temp_max - 273)) + ' °C' + ' / ' + Math.floor((forecast.list[i].main.temp_min - 273)) + ' °C';
      div.appendChild(temp);

      let description = document.createElement('p');
      description.setAttribute('class', 'desc');
      description.innerText = forecast.list[i].weather[0].description;
      div.appendChild(description);

      document.querySelector('.weekF').appendChild(div);
    }
  };
  return(
    <div className="background">
      <div className="Header">
      <h1>WEATHER APP</h1>
      </div>
      <main>
        <div className="weather">
          <h2 id="city">Brookyln,US</h2>
          <div className="temp-box">
            <img src="/weathericon.png" alt="" id="img" />
            <p id="temperature">53 °F</p>
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
      <div className="forecstD">
        <div className="divider2"></div>
        <p className="cast-header"> Next 4 days forecast</p>
        <div className="weekF">
          {/* Daily forecast will be rendered here */}
        </div>
      </div>

    </div>
  )
}