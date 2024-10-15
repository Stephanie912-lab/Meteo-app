function refreshWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");


    cityElement.innerHTML= response.data.city;

    temperatureElement.innerHTML=response.data.temperature.current;


}


function searchCity(city){
    let apiKey="4b848ft03of375a4da055d8efff97074";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
   
    searchCity(searchInput.value);
}


let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);

searchCity("Paris");




