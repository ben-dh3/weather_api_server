const WeatherClient = require('./WeatherClient');
const express = require('express');
const app = express();
const port = 3000;
const client = new WeatherClient();

app.get('/:city', (req, res) => {
    client.fetchWeatherData(req.params.city).then((weatherData) => {
        res.send({name: weatherData.name, weather: weatherData.weather[0].main, temperature: weatherData.main.temp, feels_like: weatherData.main.feels_like, humidity: weatherData.main.humidity})
    });
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);