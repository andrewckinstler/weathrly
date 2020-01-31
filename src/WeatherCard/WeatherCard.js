import React from 'react';
import moment from 'moment';
import './WeatherCard.scss'


export const WeatherCard = props => {
  const { date, weather, main } = props
  const icon = weather[0].icon
  const min = main.temp_min.toFixed(0);
  const max = main.temp_max.toFixed(0)

  return (
    <article className='card'>
      <h3>{moment(date).format('dddd l')}</h3>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}  alt='condition icon'/>
      <p><span className='bold'>H: </span>{min}°/ <span className='bold'>L: </span>{max}°</p>
    </article>
  )
}