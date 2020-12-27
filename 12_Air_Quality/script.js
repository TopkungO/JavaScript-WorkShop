(() => {
  const KEY = "abe7bff0-429b-4f4c-8231-c6958ecfabaf";

  async function getApiQuality({ city, state, country }) {
    const response = await fetch(
      `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}`
    );

    const {
      data: { current },
    } = await response.json();

    const { pollution, weather } = current;
    console.log(current);
    return {
      api: pollution.aqius,
      temperature: weather.tp,
      humidity: weather.hu,
      wind: weather.ws,
    };
  }

  function displayAirQuality({
    city,
    state,
    country,
    api,
    temperature,
    humidity,
    wind,
  }) {
    const cityElem = document.querySelector(".city");
    const stateCountryElem = document.querySelector(".state-country");
    const apiElem = document.querySelector(".api>h1");
    const temperatureyElem = document.querySelector(".temperature");
    const humidityElem = document.querySelector(".humidity");
    const windElem = document.querySelector(".wind");

    cityElem.innerText = city;
    stateCountryElem.innerText = `${state},${country}`;
    apiElem.innerText = api;
    temperatureyElem.innerText = `Temp: ${temperature}`;
    humidityElem.innerText = `Humidity: ${humidity}%`;
    windElem.innerText = `Wind: ${wind} m/s`;
  }

  function setAirQualityColor(api) {
    if (api <= 50) {
      document.documentElement.style.setProperty(
        "--current-api-color",
        "var(--good-api-color)"
      );
    } else if (api <= 100) {
      document.documentElement.style.setProperty(
        "--current-api-color",
        "var(--medium-api-color)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--current-api-color",
        "var(--bad-api-color)"
      );
    }
  }
  async function run() {
    const city = "Lan Saka";
    const state = "nakhon si thammarat";
    const country = "Thailand";

    const { api, temperature, humidity, wind } = await getApiQuality({
      city,
      state,
      country,
    });

    displayAirQuality({
      city,
      state,
      country,
      api,
      temperature,
      humidity,
      wind,
    });

    setAirQualityColor(api);
  }
  run();
})();
