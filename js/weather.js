const API_KEY = "249bae957dd601b89b5ad1dd4d9459f3";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#temp span:first-child");
        city.innerText = `${data.sys.country} / ${data.name}`;
        weather.innerText = `${Math.floor(data.main.temp/10)}ºC / ${data.weather[0].main}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);