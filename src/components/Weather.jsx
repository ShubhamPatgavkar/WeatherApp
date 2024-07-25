import React from 'react';
import Searchbox from './Searchbox';
import Info from './Info';
import { useState } from 'react';

const Weather = () => {

 

  const [climate, setClimate] = useState({
        city:"Pune",
        temp: 23.65,
        tempMin: 94,
        tempMax: 24,
        humidity: 94,
        feelsLike:  24.53,
        weather: "light rain",
  });

  const updateInfo = (result,city) => {
    if(result === null){
        setErr(true);
    }
    console.log(result);
    setClimate(result);
   
  }
  


  return (
    <>
      <Searchbox updateInfo={updateInfo}  />
      <Info info={climate}  />
    </>
  );
}

export default Weather;
