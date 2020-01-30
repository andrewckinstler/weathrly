import React, { Component } from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { CurrentWeather } from '../CurrentWeather/CurrentWeather';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: null,
      forcast: [],
      isLoading: true
    }
  }

  // this.setState({ forcast: filterForcast(data.list) })

  componentDidMount = () => {
    let currentWeather = fetch('https://api.openweathermap.org/data/2.5/weather?q=colorado,us&units=imperial&appid=2a29c95d88e3e2717635332394645d67')
      .then(data => data.json())
      .then(data => data)
    
    let forcast = fetch('https://api.openweathermap.org/data/2.5/forecast?q=colorado,us&units=imperial&appid=2a29c95d88e3e2717635332394645d67')
    .then(data => data.json())
    .then(data => data)

    Promise.all([currentWeather, forcast])
    .then(data => {
      const filterForcast = forcast => {
        return forcast.filter(obj => obj.dt_txt.includes('12:00:00'))
      }
      this.setState({ currentWeather: data[0], forcast: filterForcast(data[1].list), isLoading: false })})
  }

  

  render() {
    return (
      <div className="App">
        <Header /> 
        {!this.state.isLoading 
        ? <CurrentWeather {...this.state.currentWeather}/> 
        : <div>loading</div>}
        
      </div>
    )
  }
}

export default App;
