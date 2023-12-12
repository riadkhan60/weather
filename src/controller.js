// my api key 35799bf1b9184fd4ab0182801231112
//  http://api.weatherapi.com/v1/forecast.json?key=35799bf1b9184fd4ab0182801231112&q=London&days=4&aqi=no&alerts=no

import { getWeatherData } from './model.js';
import { app } from './view.js';

async function handleSearch(value, numberOfDays) {
  const data = await getWeatherData(value, numberOfDays);
  app.getWeatherData = data;
  app.render();
}

app.onSearch(handleSearch);
