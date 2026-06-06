const apiKey = "YOUR_API_KEY_HERE";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        alert("City not found");
        return;
    }

    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const basePath = "C:\\sumit weather\\weather-app-img\\images\\";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = basePath + "clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = basePath + "clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = basePath + "rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = basePath + "drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = basePath + "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
