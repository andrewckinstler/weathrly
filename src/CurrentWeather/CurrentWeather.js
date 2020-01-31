import React from 'react';
import './CurrentWeather.scss';
import moment from 'moment';

export const CurrentWeather = props => {
  const { name, weather, main, dt } = props
  const date = new Date(dt * 1000);
  const icon = weather[0].icon

  return (
    <section>
      <div className='today'>
        <div className='current-container'>
          <h2>{name}</h2>
          <p className='date'>{moment(date).calendar()}</p>
          <p className='current-temp'>{main.temp.toFixed(0)}°</p>
          <p>{weather[0].main}</p>
        </div>
        <div className='minmax'>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='current condition' />
          <p><span className='bold'>H:</span> {main.temp_max.toFixed(0)}° / <span className='bold'>L:</span> {main.temp_min.toFixed(0)}°</p>
          <p>{weather[0].description}</p>
        </div>
      </div>
    </section>
  )
};