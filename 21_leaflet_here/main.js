let accessToken = new URLSearchParams(window.location.search).get("accessToken");
let apiKey = new URLSearchParams(window.location.search).get("apiKey");

// use L.map API to create a new map. Pass the id of your div
let map = L.map('mapid');
// set it to coordinates of ReDI school, zoom level 13
map.setView([52.531587, 13.384742], 15);


let layer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: accessToken});
layer.addTo(map);

let marker = L.marker([52.531587, 13.384742]);
marker.addTo(map);
let popup = marker.bindPopup("<b>This is ReDI!</b>");
popup.openPopup();

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);

let countriesElement = document.getElementById("countries");

async function fetchCountries() {
    let response = await fetch("https://restcountries.eu/rest/v2/all");
    let countries = await response.json();

    for (let country of countries) {
        let countryElement = document.createElement("option");
        // put the name of the country as textContent
        countryElement.textContent = country.name;
        // put the latitude and longitude as the option's value attribute
        // since value must be a string, let's convert the latlng array to JSON:
        countryElement.value = JSON.stringify(country.latlng);
        countriesElement.appendChild(countryElement);
    }
}

function countryChanged() {
    let countriesElement = document.getElementById("countries");
    let latLngString = countriesElement.value;
    let latLng = JSON.parse(latLngString);
    // finally, set our Leaflet map to that latitude / longitude
    map.setView(latLng, 7);
}

fetchCountries();

async function search() {
    let url = "https://places.ls.hereapi.com/places/v1/autosuggest?at=52.531587,13.384742&q=cafe&apiKey=" + apiKey;
    
    let response = await fetch(url);
    let reply = await response.json();

    for (let result of reply.results) {
        if (result.position !== undefined) {
            let marker = L.marker(result.position);
            marker.addTo(map);
            let popup = marker.bindPopup(result.title);
        }
    }
}

search();

