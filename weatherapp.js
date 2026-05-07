const input=document.getElementById('search-input');
input.addEventListener('keydown',searchTemp);

const currentLoc=document.getElementById('current-location');
const dateGet=document.getElementById('current-date');
const currentCondition=document.getElementById('current-condition');
const tempValue=document.getElementById('temp-value');
const valWindSpeed=document.getElementById('val-wind-speed');
const windDeg=document.getElementById('val-wind-dir');
const humidity=document.getElementById('val-humidity');
const highTemp=document.getElementById('val-daily-high');
const lowTemp=document.getElementById('val-daily-low');
const pressureGet=document.getElementById('val-pressure');
const visibility=document.getElementById('val-visibility');
const sunrise=document.getElementById('val-sunrise');
const sunset=document.getElementById('val-sunset');

function searchTemp(e){
    if(e.key==="Enter"){
        e.preventDefault();
        const city= e.target.value.trim();
        console.log(city);
        if(city){
            getWeather(city);
            e.target.value="";
        }
    }
}

//getWeather function calling api to get data async function

async function getWeather(city) {
    const apiKey = "a3fbcfbf09e86243aded9dea29621948";
    const baseUrl= "https://api.openweathermap.org/data/2.5/weather?q=";
    
    const url= `${baseUrl}${city}&appid=${apiKey}&units=metric`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        updateData(data);
        // console.log(data);
    }catch{
        // console.log("error!!!!");
        alert("City Not Found!");
    }
}

//function for update data

function updateData(data){

    //location of city
    currentLoc.textContent= `${data.name}, ${data.sys.country}`;

    //current date 
    const now=new Date();
    dateGet.textContent= now.toLocaleString();

    //condition of the weather
    currentCondition.textContent= data.weather[0].main;

    //temperature value
    tempValue.textContent= Math.round(data.main.temp);


    //wind speed 
    valWindSpeed.innerHTML= `${data.wind.speed} <span class="unit">km/h</span>`;

    //wind direction
    windDeg.textContent= `${getWindDirection(data.wind.deg)} • ${data.wind.deg}°`;

    //humidity
    humidity.innerHTML= `${data.main.humidity} <span class="unit">%</span>`;

    //max_temp and min_temp
    highTemp.textContent= Math.round(data.main.temp_max)+"°";
    lowTemp.textContent= Math.round(data.main.temp_min)+"°";

    //pressure
    pressureGet.innerHTML= `${data.main.pressure} <span class="unit">hPa</span>`;

    //visibility
    visibility.innerHTML= `${data.visibility/1000} <span class="unit">km</span>`;

    //sunset and sunrise
    sunrise.textContent= timeFormatChange(data.sys.sunrise);
    sunset.textContent= timeFormatChange(data.sys.sunset);

    //change weather icon when weather change
    updateIcon(data.weather[0].icon);
}

//get the direction of the wind
function getWindDirection(deg){
    const directions=["North","North-East","East","South-East","South","South-West","West","North-West"];
    return directions[Math.round(deg/45)%8];
}

//convert the date time into time for sunrise and sunset
function timeFormatChange(time){
    const date=new Date(time*1000);
    return date.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
}

function updateIcon(icon_id){
    const icon=document.getElementById('condition-icon');
    const iconMap = {
  "01d": "fa-sun",
  "01n": "fa-moon",
  "02d": "fa-cloud-sun",
  "02n": "fa-cloud-moon",
  "03d": "fa-cloud",
  "03n": "fa-cloud",
  "04d": "fa-cloud-meatball",
  "04n": "fa-cloud-meatball",
  "09d": "fa-cloud-showers-heavy",
  "10d": "fa-cloud-sun-rain",
  "11d": "fa-bolt",
  "13d": "fa-snowflake",
  "50d": "fa-smog"
};
icon.className= "fa-solid "+(iconMap[icon_id]||"fa-cloud");
}