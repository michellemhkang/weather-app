import React from 'react';
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  padding: 1rem;
  text-align: right;
  font-size: 12px;
`;

export default function Weather ({ zip, data, seconds, error }: {zip: any, data: any, seconds: any, error: any}) {

  const { city, description, temp, feelsLike, high, low, humidity, wind } = data;
  
  // If app is opening or user has not inputted zip
  if (zip === '' && error === false) {
    return (
      null
    )
  }

  // If error retrieving data or no data exists for the code, display error msg
  if (error) {
    return (
      <div>
        Invalid zip code.
      </div>
    )
  }

  // If data has successfully been retrieved, display weather data
  return (
    <div className="section card">
      <h2>In {city} today, {description}.</h2>
      <div className="table" >
        <table >
          <tbody >
            <tr>
              <td>City</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>{temp}°F</td>
            </tr>
            <tr>
              <td>Feels Like</td>
              <td>{feelsLike}°F</td>
            </tr>
            <tr>
              <td>High</td>
              <td>{high}°F</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>{low}°F</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{humidity}</td>
            </tr>
            <tr>
              <td>Wind</td>
              <td>{wind}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <StyledDiv>
        <h3>Retrieving most recent weather data in:</h3>
        <p>{seconds} seconds</p>
      </StyledDiv>
    </div>
  )
}
