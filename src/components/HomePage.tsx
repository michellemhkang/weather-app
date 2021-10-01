import React, { Component } from 'react';
import Layout from "./Layout";
import Form from "./Form";
import Weather from "./Weather";
import axios from 'axios';
import API_KEY from './config.js';

class HomePage extends Component<any, any> {

  timer: any;
  seconds: any;

  constructor(props: any) {
    super(props);
    this.state = {
      zip: '',
      data: {},
      seconds: 10,
      error: false
    }
    this.setZip = this.setZip.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  // API call here
  setZip(input: any) {
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=${API_KEY}&units=imperial`
    )
      .then((response) => {
        this.setState({
          error: false,
          seconds: 10,
          data: {
            city: response.data.name,
            description: response.data.weather[0].description,
            temp: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            high: response.data.main.temp_max,
            low: response.data.main.temp_min,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
          }
        })
        this.timer = setInterval(() => this.countdown(), 1000)
        console.log('Successful GET.');
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      })
    this.setState({ zip: input });
  }

  countdown() {
    const { zip, seconds } = this.state;
    if (seconds > 0) {
      this.setState((prevState: any) => ({ seconds: prevState.seconds - 1 }));
    } else {
      clearInterval(this.timer);
      this.setZip(zip); // Recurring API call to zip in state every 10s
    }
  }

  render() {

    const { zip, data, seconds, error } = this.state;

    return (
      <Layout>
        <h1 className="header">Local Weather App</h1>
        <div className="app">
          <Form setZip={this.setZip} />
          <Weather zip={zip} data={data} seconds={seconds} error={error} />
        </div>
      </Layout>
    )
  }
}

export default HomePage;

// const EXAMPLE_ZIP_CODE = 37203;
/* const EXAMPLE_WEATHER_RESPONSE =
{
  "base": "stations",
  "clouds": {
      "all": 90
  },
  "cod": 200,
  "coord": {
      "lat": 36.1504,
      "lon": -86.7916
  },
  "dt": 1610367250,
  "id": 0,
  "main": {
      "feels_like": 21.09,
      "humidity": 74,
      "pressure": 1026,
      "temp": 29.73,
      "temp_max": 30.2,
      "temp_min": 28.99
  },
  "name": "Nashville",
  "sys": {
      "country": "US",
      "id": 4609,
      "sunrise": 1610369886,
      "sunset": 1610405514,
      "type": 1
  },
  "timezone": -21600,
  "visibility": 10000,
  "weather": [
      {
          "description": "overcast clouds",
          "icon": "04n",
          "id": 804,
          "main": "Clouds"
      }
  ],
  "wind": {
      "deg": 10,
      "speed": 6.91
  }
} */

// export default function HomePage() {
//   return (
//     <Layout>
//       <Header />
//       <Weather />
//     </Layout>
//   );
// }