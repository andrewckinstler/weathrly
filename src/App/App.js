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

  componentDidMount() {
    this.fetchCurrentWeather();
  }

  fetchCurrentWeather() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=colorado,us&units=imperial&appid=2a29c95d88e3e2717635332394645d67'
    const data = fetch(url)
    .then(data => data.json())
    .then(data => this.setState({ currentWeather: data, isLoading: false }))
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
