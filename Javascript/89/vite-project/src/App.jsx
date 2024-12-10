// I had a lot of trouble so I watched the next video to help me with the homework. 
import './App.css'

import React, { Component } from 'react'
const zipInput = 11598;
const apiKey = 'a72d7b810735d175394c7e3d480ece12';


export default class App extends Component {
  state = {
    weatherData: null,
    error: null,
  };
  async componentDidMount(){
    try {
      const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipInput},US&appid=${apiKey}&units=imperial&lang=he`);

      const weatherData = await r.json();
      this.setState({
        weatherData
      });

      if (!r.ok) {
        throw new Error(`${r.status} - ${r.statusText} - ${weatherData.message}`);
      }

      
    } catch(e) {
      console.error(e);

    }
  }

  
  render() {
    const {weatherData} = this.state;
    return (
      <div>
        <h1>The weather is...</h1>
        <h2>{weatherData ? JSON.stringify(weatherData.weather[0].main) : "Loading..."}</h2>
      </div>
    )
  }
}



