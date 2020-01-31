import React from 'react';
import { shallow } from 'enzyme';
import { WeatherList } from './WeatherList';
import WeatherCard from '../WeatherCard/WeatherCard';

describe('Weather list', () => {
  it('should match a snapshot', () => {
    const mockForcast = [
      {
          "dt": 1580428800,
          "main": {
              "temp": 20.79,
              "feels_like": 13.06,
              "temp_min": 20.05,
              "temp_max": 20.79,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 726,
              "humidity": 87,
              "temp_kf": 0.41
          },
          "weather": [
              {
                  "id": 600,
                  "main": "Snow",
                  "description": "light snow",
                  "icon": "13d"
              }
          ],
          "clouds": {
              "all": 96
          },
          "wind": {
              "speed": 4.45,
              "deg": 18
          },
          "snow": {
              "3h": 0.81
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2020-01-31 00:00:00"
      },
      {
          "dt": 1580439600,
          "main": {
              "temp": 11.8,
              "feels_like": 2.91,
              "temp_min": 11.25,
              "temp_max": 11.8,
              "pressure": 1028,
              "sea_level": 1028,
              "grnd_level": 728,
              "humidity": 84,
              "temp_kf": 0.31
          },
          "weather": [
              {
                  "id": 600,
                  "main": "Snow",
                  "description": "light snow",
                  "icon": "13n"
              }
          ],
          "clouds": {
              "all": 91
          },
          "wind": {
              "speed": 5.3,
              "deg": 314
          },
          "snow": {
              "3h": 0.31
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-01-31 03:00:00"
      },
      {
          "dt": 1580450400,
          "main": {
              "temp": 4.24,
              "feels_like": -4.95,
              "temp_min": 3.88,
              "temp_max": 4.24,
              "pressure": 1032,
              "sea_level": 1032,
              "grnd_level": 729,
              "humidity": 76,
              "temp_kf": 0.2
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 72
          },
          "wind": {
              "speed": 5.01,
              "deg": 300
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2020-01-31 06:00:00"
      }
    ];

    const wrapper = shallow(<WeatherList props={mockForcast} />)

    expect(wrapper).toMatchSnapshot()
  })
})