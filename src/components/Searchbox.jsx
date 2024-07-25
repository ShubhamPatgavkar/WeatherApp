import React from 'react';
import "../styles/Search.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Searchbox = ({ updateInfo}) => {

  const APIurl = "https://api.openweathermap.org/data/2.5/weather";
  const key = "844f9d41ae3913d913fec4cf10f64ca1";

  const [city, setCity] = useState("");
  const [newErr, setNewErr] = useState(false);

  const getWeather = async () => {
    try {
      let response = await fetch(`${APIurl}?q=${city}&appid=${key}&units=metric`);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      let jsonRes = await response.json();
     console.log(jsonRes)
      let result = {
        city: jsonRes.name,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
      };

      return result;
    } catch (error) {
      console.error('Fetch error: ', error);
      return null;
    }
  }

  const HandleSubmit = async (eve) => {
    eve.preventDefault();
    console.log(city);
    let Newres = await getWeather();
    if (Newres) {
      updateInfo(Newres,city);
      setCity("");  // Clear the input field after a successful search
       setNewErr(false);
    } else {
      setNewErr(true);
      console.error('Error fetching weather data');
    }
  }

  return (
    <div className='SearchBox'>
      <h2>Find Weather</h2>

      <form action="" onSubmit={HandleSubmit}>
       
        <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} />
        <Button variant="contained" type='submit' >Search</Button>
      </form>
       <p style={{color:"red"}}>{newErr ?"No Such Place Found in the API":""}</p>
    </div>
  );
};

export default Searchbox;
