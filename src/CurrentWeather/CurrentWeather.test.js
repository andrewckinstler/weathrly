import { shallow } from 'enzyme';
import React from 'react';
import { CurrentWeather } from './CurrentWeather';

describe('Current weather card', () => {
  it('should match a snapshot', () => {
    const mockData = {
      name: 'Colorado',
      weather: [
        {
            "id": 521,
            "main": "Rain",
            "description": "shower rain",
            "icon": "09d"
        },
        {
            "id": 621,
            "main": "Snow",
            "description": "shower snow",
            "icon": "13d"
        }
    ],
      main: {
        "temp": 31.68,
        "feels_like": 24.69,
        "temp_min": 26.01,
        "temp_max": 41,
        "pressure": 1016,
        "humidity": 59
    },
      dt: 1580330086
    }
    const wrapper = shallow(<CurrentWeather {...mockData}/>)

    expect(wrapper).toMatchSnapshot()
  })
})