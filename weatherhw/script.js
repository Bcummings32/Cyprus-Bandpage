let searchData = $(".search-data")
let APIKey = "63dbd153e65dc57a0e639b1071efe861";
var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}"
let cityList = [];
init();
listButton();
searchButton();

$("#find-city").on("click", function(event) {
    event.preventDefault();

    let city = $("#city-input").val();
    getAPIs(city);
});

//save cities into local storage
function storeCities() {
    localStorage.setItem("cities", JSON.stringify(listOfCities));
}

//function to render buttons

//AJAX call URL

function getWeather(cityName) {

//AJAX Call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
}

//temp, humidity, windspeed, UV
var lat = (data.list[0].coord.lat);
var lon = (data.list[0].coord.lon);

$('#searchTerm').keypress(function(event) {
    if (event.keyCode === 13) { 
		event.preventDefault();
		$("#searchBtn").click(); 
	} 
});
}

