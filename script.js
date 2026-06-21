const apiKey = "YOUR_API_KEY";

async function getWeather() {

    const city = document.getElementById("city").value.trim();

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try{

        const response = await fetch(url);

        if(!response.ok){
            alert("City not found!");
            return;
        }

        const data = await response.json();

        document.getElementById("cityName").innerHTML = data.name;

        document.getElementById("condition").innerHTML =
        data.weather[0].main;

        document.getElementById("temp").innerHTML =
        Math.round(data.main.temp) + "°C";

        document.getElementById("temperature").innerHTML =
        Math.round(data.main.temp) + "°C";

        document.getElementById("humidity").innerHTML =
        data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
        data.wind.speed + " km/h";

        document.getElementById("pressure").innerHTML =
        data.main.pressure + " hPa";

        document.getElementById("feels").innerHTML =
        "Feels Like " +
        Math.round(data.main.feels_like) +
        "°C";

        const now = new Date();

        document.getElementById("time").innerHTML =
        "Last Updated : " +
        now.toLocaleDateString() +
        " " +
        now.toLocaleTimeString();

    }

    catch(error){

        alert("Something went wrong!");

    }

}