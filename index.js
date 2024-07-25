
function getWeather() {
    let xhr = new XMLHttpRequest();
    let location = document.getElementById('location').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=171dfa9d1460da65a4e66008d4090f53`;

    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            displayWeather(data);
        } else if (xhr.readyState === 4) {
            console.log('Error: ' + xhr.status);
        }
    };

    xhr.send();
}

getWeather();

function displayWeather(data) {
    const weatherContent = document.getElementById('weather-content');
    let iconCode = data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    weatherContent.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p class="weather-temperature">Temperature: ${data.main.temp}°C</p>
        <p class="weather-humidity">Humidity: ${data.main.humidity}%</p>
        <p class="weather-wind-speed">Wind speed: ${data.wind.speed} m/s</p>
        <p class="weather-pressure">Pressure: ${data.main.pressure} hPa</p>
        <p class="weather-description">Weather: ${data.weather[0].description}</p>
        <div class="weather-block">
        <p class="weather-wind-direction">Wind direction: ${data.wind.deg}°</p>
        <img class="weather-icon" src="${iconUrl}" alt="Weather icon">
        </div>
    `;
}
