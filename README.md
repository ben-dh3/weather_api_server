# Weather API Served on Express.js Server

Type the city name of the weather data you want to find in the URL, the WeatherClient class fetches the data from the [OpenWeather API](https://openweathermap.org/api), and is formatted and returned using Express.js.

Made for the purpose of understanding how to fetch and manipulate data from an API, and further my knowledge of building web servers with Express.js

In the future I intend improve the UI.

# How to Run the Project

- In your terminal, navigate outside `server.js` and install the `express` package:

  `npm add express`

- Get an API key from [OpenWeather API](https://openweathermap.org/api) by signing up and creating an account.
- Copy the API key into a file `apiKey.js` like so:
  
  `module.exports = <your API key here>;`
  
- Run the server:
  
  `node server.js`
  
- Go to `http://localhost:3000/london` to see the weather in London or append a city of your choice!

# Examples

![example1](https://github.com/ben-dh3/weather_api_server/blob/main/images/image1.png?raw=true)

![example2](https://github.com/ben-dh3/weather_api_server/blob/main/images/image2.png?raw=true)

