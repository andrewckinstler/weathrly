import React, { Component } from 'react';
import './App.scss';
import { Header } from '../Header/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: {},
      forcast: []
    }
  }

  render() {
    return (
      <div className="App">
        <Header /> 
      </div>
    )
  }
}

export default App;
