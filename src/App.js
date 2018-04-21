import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';

const API_KEY = "ecbfbf459742b9aa1f8ba96c9a46a551";

class App extends Component {
    state = {
        city: undefined,
        temperature: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if(data.cod !=404){
            console.log(data);
            this.setState({
                city: data.name,
                temperature: data.main.temp,
                error: undefined
            })
        }
        else{
            this.setState({
                city: undefined,
                temperature: undefined,
                error: "Please enter a valid city name."
            })
        }
    }
    render() {
        return (
                <div className="App">
                    <Header/>
                    <WeatherForm getWeather={this.getWeather} />
                    <Weather
                        city={this.state.city}
                        temperature={this.state.temperature}
                        error={this.state.error}
                        />
                </div>
                );
    }
}

export default App;
