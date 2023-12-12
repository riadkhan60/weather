let weather = {};

export async function getWeatherData(city, numDays = 5) {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=35799bf1b9184fd4ab0182801231112&q=${city}&days=${numDays}&aqi=no&alerts=no`,
    );
    const data = await res.json();
    const weather = digData(data);
    console.log(weather)
    return weather;

  } catch (err) {
    console.log(err);
  }
}


const weekDays = new Map([
  [0, 'Sunday'],
  [1, 'Monday'],
  [2, 'Tuesday'],
  [3, 'Wednesday'],
  [4, 'Thusday'],
  [5, 'Friday'],
  [6, 'Saturday'],
]
)


function getDayName(date) {
  const dayNumber = new Date(date).getDay();
  const dayName = weekDays.get(dayNumber);

  return dayName;
}


function digData(data) {
  const weatherData = data.forecast.forecastday;

  return (weather = {
    city: data.location.name,
    country: data.location.country,
    today: {
      curretTemp: data.current.temp_c,
      currentCondition: data.current.condition.text,
      currentConditionIcon: data.current.condition.icon,
      windSpeed: data.current.wind_kph,
      humidity: data.current.humidity,
      maxTemp: weatherData[0].day.maxtemp_c,
      minTemp: weatherData[0].day.mintemp_c,
    },
    weathers: [
      {
        fullDate: weatherData[1].date,
        date: getDayName(weatherData[1].date),
        avgTemp: weatherData[1].day.avgtemp_c,
        maxTemp: weatherData[1].day.maxtemp_c,
        minTemp: weatherData[1].day.mintemp_c,
        condition: weatherData[1].day.condition.text,
        icon: weatherData[1].day.condition.icon,
      },
      {
        fullDate: weatherData[2].date,
        date: getDayName(weatherData[2].date),
        avgTemp: weatherData[2].day.avgtemp_c,
        maxTemp: weatherData[2].day.maxtemp_c,
        minTemp: weatherData[2].day.mintemp_c,
        condition: weatherData[2].day.condition.text,
        icon: weatherData[2].day.condition.icon,
      },
      {
        fullDate: weatherData[3].date,
        date: getDayName(weatherData[3].date),
        avgTemp: weatherData[3].day.avgtemp_c,
        maxTemp: weatherData[3].day.maxtemp_c,
        minTemp: weatherData[3].day.mintemp_c,
        condition: weatherData[3].day.condition.text,
        icon: weatherData[3].day.condition.icon,
      },
      {
        fullDate: weatherData[4].date,
        date: getDayName(weatherData[4].date),
        avgTemp: weatherData[4].day.avgtemp_c,
        maxTemp: weatherData[4].day.maxtemp_c,
        minTemp: weatherData[4].day.mintemp_c,
        condition: weatherData[4].day.condition.text,
        icon: weatherData[4].day.condition.icon,
      },
    ],
  });
}
