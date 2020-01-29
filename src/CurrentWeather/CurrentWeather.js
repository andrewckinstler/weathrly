import React from 'react';
import './CurrentWeather.scss';

export const CurrentWeather = props => {
  const { name, weather, main, dt } = props
  const date = new Date(dt * 1000);
  console.log(date)
  return (
    <div>
      <h2>{name}</h2>
      <p>{date.toString()}</p>
      <p>{weather[0].main}</p>
      <p>{weather[0].description}</p>
      <p>Current temp: {main.temp}°</p>
      <p>High: {main.temp_max}°</p>
      <p>Low: {main.temp_min}°</p>
    </div>
  )
};