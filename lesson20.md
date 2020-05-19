<!-- .slide: id="lesson20" -->

# Basic Frontend - Spring 2020

Lesson 20, Tuesday, 2020-05-19

---

# Homework solution

---

<!-- .slide: id="lesson20:Libraries" -->

# Libraries

---

### Libraries

* Up until now, this was our standard pattern:

```html
<html>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

All our JavaScript code was in one file called `main.js`

---

### Multiple scripts

* We can add as many scripts as we want:

```html
<html>
  <body>
    <script src="utilities.js"></script>
    <script src="recipes.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

* This allows us to split long scripts into pieces

---

### Multiple scripts

* If we have multiple script tags, we can use all global variables and global functions from all scripts that came _before_ our script.
* In the example on the last slide, `recipes.js` can use all globals from `utilities.js`, and `main.js` can use all globals from `recipes.js` and `utilities.js`

---

### Scripts in header vs. body

* We put our _own_ scripts at the bottom of the `<body>` tag
* This allows us to access all HTML elements via DOM API
* We can put scripts also in the `<head>` tag. These are loaded _before_ the page is rendered:

```html
<html>
  <head>
    <script src="utilities.js"></script>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

---

### Remote scripts

* So far, we loaded scripts only from our local file system
* However, scripts can also be remote addresses. In the example below, we load the popular `Moment.js` library:

```html
<html>
  <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/moment.js"></script>
  </head>
</html>
```

---

### moment.js

* `Moment.js` is a popular library for working with date and time
* It consists of about 5000 lines of JavaScript code
* It is Open Source (MIT license)
* When we load `moment.js`, we have access to a single global function called `moment`
* Documentation: https://momentjs.com/docs/

---

### moment.js example

```html
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/moment.js"></script>
  </head>
  <body>
    <script>
      let date = moment([2020, 0, 1]); // 1. January 2020
      console.log(date.fromNow()); // prints "5 months ago"
    </script>
  </body>
</html>
```

---

### Leaflet

* Let's render a map on the screen!
* We're using Leaflet, a popular map rendering library
* Full tutorial at: https://leafletjs.com/examples/quick-start/

```html
<html>
  <head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
  </head>
  <body>
    <div id="mapid" style="height:600px"></div>
    <script src="main.js"></script>
  </body>
</html>
```

---

### Leaflet

* Leaflet exposes one single variable called `L`
* We need some JavaScript to initialize the map:

```js
// use L.map API to create a new map. Pass the id of your div
let map = L.map('mapid');
// set it to coordinates of ReDI school, zoom level 15
map.setView([52.531587, 13.384742], 15);
```

---

### Leaflet

* Leaflet itself doesn't come with data
* We can use Mapbox data (which comes from OpenStreetMap)
* Note - Mapbox is not free, but requires an access token. Check the slack  channel and set it in the `accessToken` property below:

```js
let layer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token' // YOUR TOKEN HERE!
});
layer.addTo(map);
```

---

### Add a marker

* We can add markers to the map:

```js
let marker = L.marker([52.531587, 13.384742]);
marker.addTo(map);
```

---

### Add a popup to the marker

```js
let popup = marker.bindPopup("<b>This is ReDI!</b>");
popup.openPopup();
```

---

### Add a listener

```js
function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);
```

---

### Let's play

* Add a couple of more markers, e.g. your home, your favorite places in Berlin
* Can you add a button below the `div` that sets the view of the map to your favorite place? (hint: use `map.setView()` function in your button's `onclick` function)

---

### Homework

* Create a `<select id="countries" onchange="countryChanged()"></select>` element in your HTML page
* Call the restcountries.eu "all" API: https://restcountries.eu/rest/v2/all
* For every country, create one `<option>` element using `document.createElement()`
* In your `countryChanged()` function, set the view of your Leaflet map to that country's latitude and longitude
* Hints are on next slides.

---

### Homework Hints

First, we need to fetch all countries. Remember the `fetch` API?

```js
async function fetchCountries() {
    let response = await fetch("https://restcountries.eu/rest/v2/all");
    let countries = await response.json();

    // now populate the <select> element! (see next slide for hint)
}
```

---

### Homework Hints

Let's populate our `<select>` element:

```js
// inside your fetchCountries() function:
let countriesElement = document.getElementById("countries");

for (let country of countries) {
    let countryElement = document.createElement("option");
    // put the name of the country as textContent
    countryElement.textContent = country.name;
    // put the latitude and longitude as the option's value attribute
    // since value must be a string, let's convert the latlng array to JSON:
    countryElement.value = JSON.stringify(country.latlng);
    countriesElement.appendChild(countryElement);
}
```

---

### Homework Hints

Let's scroll the map when a country is selected:

```js
function countryChanged() {
    let countriesElement = document.getElementById("countries");
    let latLngString = countriesElement.value;
    let latLng = JSON.parse(latLngString);
    // finally, set our Leaflet map to that latitude / longitude
    map.setView(latLng, 7);
}
```
