const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const forecast = document.getElementById("forecast");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const visibility = document.getElementById("visibility");
const weatherIcon = document.getElementById("weatherIcon");

async function getWeather(city) {
  if (!city) return;

  const API_KEY = "";
  const URL = ``;

  try {
    const res = await fetch(URL);
    const data = await res.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    cityName.innerText = `Weather in ${data.name}`;
    temperature.innerText = `${data.main.temp} °C`;
    forecast.innerText = data.weather[0].main;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    wind.innerText = `Wind: ${data.wind.speed} m/s`;
    visibility.innerText = `Visibility: ${(data.visibility / 1000).toFixed(1)} km`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  } catch (error) {
    console.error("Fetch error:", error);
    alert("Failed to get weather data.");
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(cityInput.value.trim());
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getWeather(cityInput.value.trim());
});










