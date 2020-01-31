import { shallow } from 'enzyme';
import React from 'react';
import { WeatherCard } from './WeatherCard';

describe('Weather card', () => {
  it('should match a snapshot', () => {

    const dt = '12/30';
    const weather = [{icon: '10d'}]
    const main = { temp_max: 3, temp_min: 0 }


    const wrapper = shallow(<WeatherCard key={1} date={dt} weather={weather} main={main}/>)
    
    expect(wrapper).toMatchSnapshot()
  })
})