import React from 'react';
import './CurrentWeather.scss';
import moment from 'moment';

export const CurrentWeather = props => {
  const { name, weather, main, dt } = props
  const date = new Date(dt * 1000);

  return (
    <section>
      <div className='today'>
        <div className='current-container'>
          <h2>{name}</h2>
          <p className='date'>{moment(date).calendar()}</p>
          <p className='current-temp'>{main.temp}°</p>
          <p>{weather[0].main}</p>
        </div>
        <div className='minmax'>
          <p><span className='bold'>H:</span> {main.temp_max}° / <span className='bold'>L:</span> {main.temp_min}°</p>
          <p>{weather[0].description}</p>
        </div>
      </div>
    </section>
  )
};