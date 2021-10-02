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

  /*
  ----BUG----
  Upon subsequent new inputs entered (2nd and above), timer starts to count down in increasing increments(++).
  For ex, if '90024' is 2nd input, timer starts decrementing by two (10-8-6-4-2-0), then upon reaching 0, three (10-7-4...) and so on.
  App then times out.
  Figuring out if it has to do with calling API excessively and getting blocked,
  of it is a bug in logic of the timer.
  */
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
