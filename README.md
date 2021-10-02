# Local Weather App

## Demo
![](https://media.giphy.com/media/kqcY6cRsYdKgbTuh1C/giphy.gif)

## Description of Features
The local weather app is now functional to retrieve weather data from the Open Weather API, given a valid zip code from user.
- The design is clean and thematic with some hover interactivity. 
- An error message will display if the input from user is invalid or a successful response from the API is not received. 
- A countdown timer refreshes the load to update the data every 10 seconds.

## Run the app locally
1. Fork and clone the repo to your local machine.
2. Install dependencies using `npm install`.
3. Create a copy of config.template.js in **src/components**, named **config.js**. Add a valid API key from [https://openweathermap.org/current](https://openweathermap.org/current) to line 1.
4. Run script `npm start` to run server.
5. Open localhost:9001 on your machine.
