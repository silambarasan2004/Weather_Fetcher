const weatherButton = document.getElementById('fetchWeatherBtn');
const cityInput = document.getElementById('cityInputField');
const weatherOutput = document.getElementById('weatherResultBox');

const API_KEY = 'dfdc6ef1d64c37daa3a1082890999b47';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeatherData(city) {
  const apiUrl = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('City not found or invalid input.');
    }

    const data = await response.json();

    const location = `${data.name}, ${data.sys.country}`;
    const temperature = `${data.main.temp}°C`;
    const description = data.weather[0].description;

    weatherOutput.innerHTML = `
      <h3>${location}</h3>
      <p><strong>Temperature:</strong> ${temperature}</p>
      <p><strong>Condition:</strong> ${description}</p>
    `;
  } catch (error) {
    weatherOutput.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

weatherButton.addEventListener('click', () => {
  const cityName = cityInput.value.trim();
  if (cityName !== '') {
    getWeatherData(cityName);
  } else {
    weatherOutput.innerHTML = `<p style="color:red;">Please enter a city name.</p>`;
  }
});
