import {useState, useEffect} from "react";
import weatherkey from "../weatherconfig";
const apikey = weatherkey;
export default function Search(props){
    const [city, setCity] = useState('');
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