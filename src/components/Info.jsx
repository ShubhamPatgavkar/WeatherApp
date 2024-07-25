import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../styles/info.css";
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const Info = ({info}) => {

  const rainy = "https://i.pinimg.com/originals/df/51/80/df51804a05fe7d9ce61fb868f5e759d7.jpg";
  const sunny ="https://newsexpressngr.com/images/news/sunny_9.jpg";
  const icy = "https://wallpaperaccess.com/full/1474668.jpg";
  const normal = "https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0";

  return (
    <div>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170"
              image={info.humidity > 80 ? rainy : info.temp > 30 ? sunny : info.temp < 17 ? icy : normal}
              alt="weather image"
            />
            <CardContent>
              <div className="cardHeader">
                <Typography gutterBottom variant="h5" component="div">
                  {info.city}
                </Typography>
                <div className="iconContainer">
                  {info.humidity > 80 ? <ThunderstormOutlinedIcon/> : info.temp < 22 ? <AcUnitOutlinedIcon/> : <WbSunnyOutlinedIcon/>}
                </div>
              </div>
              <Typography variant="body2" color="text.secondary">
                <p>Temperature = {info.temp}&deg;C</p> 
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The Weather can be Described as {info.weather} and it Feels like {info.feelsLike}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>        
      </div>
    </div>
  )
}

export default Info;
