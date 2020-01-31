import React from 'react';
import './WeatherList.scss';
import { WeatherCard } from '../WeatherCard/WeatherCard'

export const WeatherList = ( props ) => {
  const createCards = props.props.map(obj => 
  <WeatherCard 
  key={obj.dt}
  date={obj.dt_txt}
  weather={obj.weather}
  main={obj.main}
  />)
  return (
    <div className='card-container'>{createCards}</div>
  )
}