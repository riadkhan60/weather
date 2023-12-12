class App {
  #searchButton = document.querySelector('#serach-btn');
  #inputField = document.querySelector('#serach-input');
  #WeatherData;

  #numberOfDays;

  constructor(numberOfDays) {
    this.#numberOfDays = numberOfDays;
  }
  onSearch(func) {
    this.#searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      func(this.#inputField.value, this.#numberOfDays);
    });
  }

  get getWeatherData() {
    return this.#WeatherData;
  }

  set getWeatherData(data) {
    this.#WeatherData = data;
  }

  render() {
    const container = document.querySelector('#main-app');
    if (container.children.length > 1) {
      container.children[1].remove();
    }

    if (this.#WeatherData == undefined) {
      container.insertAdjacentHTML(
        'beforeend',
        `<section class="message">Wrong keywords! <br> Please search with a proper city Name</section> !`,
      );
    } 
      
    console.log(this.#WeatherData)

    container.insertAdjacentHTML('beforeend', this._weatherMarkup());

    setTimeout(function () {
      document.querySelector('#weather-box').classList.remove('hidden');
    }, 0);
  }

  _weatherMarkup() {
    return `<section id="weather-box" class="hidden"}>

        <div class="today-weather">
          <div class="weather-icon">
            <img src="${this.#WeatherData.today.currentConditionIcon}" alt="">
          </div>
          <div class="weather-info">
            <p class="weather-temperature">
              <span class="current-temp">${
                this.#WeatherData.today.curretTemp
              } </span>
            </p>
            <h3 class="weather-condition">${
              this.#WeatherData.today.currentCondition
            }</h3>
          </div>
          <ul class="weather-details">
            <li class="weather-detail weather-range">
              <span class="detail-icon material-symbols-outlined">
                thermometer
              </span>
              <span class="detail-info"
                ><p class="weather-temperature">
                  <span class="current-temp">${
                    this.#WeatherData.today.maxTemp
                  }</span>
                </p>
                <p class="weather-temperature">
                  <span class="current-temp">${
                    this.#WeatherData.today.minTemp
                  }</span>
                </p>
              </span>
            </li>
            <li class="weather-detail">
              <span class="material-symbols-outlined"> water_drop </span>
              <span> Humadity ${this.#WeatherData.today.humidity}%</span>
            </li>
            <li class="weather-detail">
              <span class="material-symbols-outlined"> air </span>
              <span> Wind Speed ${this.#WeatherData.today.windSpeed} kmph</span>
            </li>
          </ul>
          <div class="city-region">${this.#WeatherData.city}, ${
      this.#WeatherData.country
    }</div>
        </div>
        <ul id="weather-lists">
        ${this.#WeatherData.weathers
          .map((weather) => this._listWeatherMarkup(weather))
          .join('')}
        </ul>
      </section>`;
  }

  _listWeatherMarkup(weather) {
    return `<li class="weather-list">
            <h4 class="date">${weather.date}</h4>
            <div class="weather-icon">
               <img src="${weather.icon}" width="35px" alt="">
            </div>
            <h3 class="weather-condition">${weather.condition}</h3>
            <p class="weather-temperature">
              <span class="current-temp">${weather.avgTemp} °</span>
              <span class="temperature-range">${weather.maxTemp}°  ${weather.minTemp}° </span>
            </p>
          </li>`;
  }
}

export const app = new App(5);
