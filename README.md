# Weather_Fetcher
## Date: 12/7/2025
## Objective:
To demonstrate how to use Promises and async/await in JavaScript by fetching and displaying live weather data from an API. This activity reinforces real-world async data handling in web applications.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>WeatherNow</h1>```

Create an ```<input>``` for the city name

Add a ```<button>``` to trigger the fetch

Create a <div> to display the weather information

#### 2. Style with CSS:
Center the layout and style input and button

Style the weather output box with borders, padding, and a background color

Add hover effects for the button

#### 3. JavaScript with Promises and Async/Await:
Use fetch() to get weather data from a free API like https://api.weatherapi.com or a mock API

Wrap the fetch in an async function

Use await to wait for the response and parse it as JSON

Use .catch() to handle any errors in the promise

Display the temperature, description, and location in the output div
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>WeatherNow</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="weatherContainer">
    <h1 class="headerTitle">Weather</h1>
    <input type="text" id="cityInputField" placeholder="Enter city..." />
    <button id="fetchWeatherBtn">Check Weather</button>
    <div id="weatherResultBox" class="resultContainer"></div>
  </main>
  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #7d9fbc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.weatherContainer {
  text-align: center;
  background: #d0c0c0;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.headerTitle {
  margin-bottom: 1rem;
  color: #333;
}

#cityInputField {
  padding: 0.6rem;
  width: 220px;
  border: 1px solid #bbb;
  border-radius: 6px;
  margin-right: 0.5rem;
}

#fetchWeatherBtn {
  padding: 0.6rem 1rem;
  border: none;
  background-color: #0077cc;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

#fetchWeatherBtn:hover {
  background-color: #005fa3;
}

.resultContainer {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #e6f2ff;
  border: 1px solid #99ccff;
  border-radius: 8px;
  min-height: 60px;
}
```
## JavaScript Code:
```const weatherButton = document.getElementById('fetchWeatherBtn');
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
```
## Output:
<img width="1919" height="965" alt="Screenshot 2025-07-13 215002" src="https://github.com/user-attachments/assets/e1e4f656-e089-4e14-b458-e02fad69323d" />

## Result:
A mini module that successfully uses Promises and async/await to handle real-time API data, reinforcing asynchronous JavaScript patterns in a practical context.
