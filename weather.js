const apiKey = "94f4e675579847ca1607a598e2736723";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL + city+ `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="icons8-cloudy-50.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src="icons8-sun-50 (1).png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src="icons8-rain-50 (3).png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="icons8-drizzle-50 (1).png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src="icons8-mist-60.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})

checkWeather();