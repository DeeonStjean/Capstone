import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import weatherkey from "../weatherconfig";
const apikey = weatherkey;
export default function Home(props){
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
}