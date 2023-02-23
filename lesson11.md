<!-- .slide: id="lesson10" -->

# JavaScript

Lesson 11: Libraries, LocalStorage

---

### Recap: JSON

JSON is a way of serializing data to a string for transportation (calling APIs with `fetch`) **or** storage.

```js
let myObject = {
    name: 'Owen',
    job: 'Software Developer'
};

let myObjectAsJsonString = JSON.stringify(myObject);
console.log(typeof myObjectAsJsonString); // ???

let otherJsonString = '{"fruits":["apple","banana","grape"]}';
let otherThing = JSON.parse(otherJsonString);
console.log(typeof otherThing); // ???
```

---

### Local storage

Local storage is a browser API that uses the same key-value pair concept as Objects in order to save and retrieve data.

Data saved in this way will persist when the user refreshes the window!

```js
// Saving a value:
localStorage.setItem('key', 'value');
// Loading a value:
let myValue = localStorage.getItem('key');
```
Note that you can only save values of type `string`

---

### Similarities to objects

```js
// Object with key 'name' and value 'Owen'
let teacher = {
    name: 'Owen'
};
console.log(teacher.name);
console.log(teacher['name']);

// These are the same:
teacher.name = 'Harald';
teacher['name'] = 'Harald';

// Local storage is also a key-value store
localStorage.setItem('name', 'Owen');
let value = localStorage.getItem('name');
console.log(value); // ???
```

---

### Storing in local storage with JSON

`localStorage.setItem` and `getItem` only save and retrieve String type data.
How do we save more complex data structures? JSON strings!

```js
let person = {
    name: 'Owen',
    age: 28
};
let personAsJsonString = JSON.stringify(person);
localStorage.setItem('savedPerson', personAsJsonString);
// User refreshes the page...
let someJsonString = localStorage.getItem('savedPerson');
let something = JSON.parse(someJsonString);
console.log(something.name); // ???
```
Remeber that arrays can also be converted to and from JSON!

---

### In-class project: Create an address book

Basic requirements:
* It should be a form with labels and inputs for first name, last name, and email address, with a save button
* It should display all contacts in a list below the form

---

### In-class project: Create an address book

Advanced requirements:
* It should also save to local storage, so that when the page is refreshed, the saved contacts are still there
* Each saved contact should have a delete button that lets you remove it

---

### Example screenshot

![example](images/addressbook_example.png)

Can you begin to guess how you might complete this task with the tools you've learned?

---

### Tools required

* Click handler functions with `onclick`
* Reading data from DOM elements with `document.getElementById`
* Creating objects `{ name: 'Owen' }`
* Saving to and loading from localStorage 
 * Must save as a JSON string with `JSON.stringify`

---

### Strategizing

Before you start, define distinct tasks:

1. An HTML form with the 3 inputs mentioned in the description, plus save button
2. Click handler function for the save button that saves the form data in memory
 * I recommend saving contacts as an **array** of **objects**
3. A function renders list item (`li`) elements for each contact.

---

### Strategizing

The advanced requirements can be done in any order as long as the basic requirements are completed first.

---

### Step 1

Write the HTML form with the 3 inputs mentioned in the description and a save button

(~10 minutes)

---

### Step 1 Example

```html
<html>
  <body>
    <div>
      <label for="firstnameInput">First name:</label>
      <input id="firstnameInput" type="text">
      <br/>
      
      <label for="lastnameInput">Last name:</label>
      <input id="lastnameInput" type="text">
      <br/>
      
      <label for="emailInput">Email address:</label>
      <input id="emailInput" type="text">
      <br/>
      
      <button>Add contact</button>
    </div>
    <ul id="contactList"></ul>

    <script src="main.js"></script>
  </body>
</html>
```

---

### Step 2

Write the click handler for the save button that saves the form data in memory and connect it to your save button `onclick`

(~30 minutes)

---

### Step 2 Example

```js
// main.js

let myContacts = [];

// add this to your button onclick in the html
function addContactClick() {
    let firstName = document.getElementById('firstNameInput').value;
    let lastName = document.getElementById('lastNameInput').value;
    let emailAddress = document.getElementById('emailInput').value;

    let newContact = {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress
    };

    myContacts.push(newContact);
}
```

---

### Step 3

Now that you have the contacts saved into an array, write the code that renders list item (`li`) elements for each contact.

(~30 minutes)

---

### Step 3 example

```js
function renderContacts() {
    let listElement = document.getElementById('contactList');

    // Clear out the existing list of contacts
    listElement.innerHTML = "";

    // Re-add all of our contacts
    for (let i = 0; i < myContacts.length; i++) {
        let contact = myContacts[i];
        let newContactListItem = document.createElement('li');
        newContactListItem.textContent = contact.firstName + ' ' + contact.lastName + ': ' + contact.emailAddress;
        listElement.appendChild(newContactListItem);
    }
}
```
Now this needs to be called whenever you call .push on myContacts

---

### Advanced requirements: Saving to local storage

Create a helper function to save to local storage every time you click the save button, and another one to load from local storage.

---

### Local storage example

```js
let LOCAL_STORAGE_KEY = 'addressBookContacts';

function saveContacts() {
    let contactsAsJsonString = JSON.stringify(myContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, contactsAsJsonString);
}

function loadContacts() {
    let savedContactsAsJsonString = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedContactsAsJsonString) {
        myContacts = JSON.parse(savedContactsAsJsonString);
    }
}
```

When should you call these functions?

---

### Advanced requirements (Bonus!): 'Delete contact' button

When you are creating each contact list item, you will need to add an additional button.

Hint: Very similar to the todo list exercise!

---

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

### Homework 1

* Create a `<select id="countries" onchange="countryChanged()"></select>` element in your HTML page
* Call the restcountries.eu "all" API: https://restcountries.com/v3.1/all
* For every country, create one `<option>` element using `document.createElement()`
* In your `countryChanged()` function, set the view of your Leaflet map to that country's latitude and longitude
* Hints are on next slides.

---

### Homework 1 Hints

First, we need to fetch all countries. Remember the `fetch` API?

```js
async function fetchCountries() {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let countries = await response.json();

    // now populate the <select> element! (see next slide for hint)
}
```

---

### Homework 1 Hints

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

### Homework 1 Hints

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

---

### Homework 2

* Let's write a number guessing game!
* Choose a secret number between 1 and 100
* Add an `<input>` where the user can enter a number between 1 and 100
* Add a button "guess"
* Output to a `<div>` element whether the guessed number is smaller, larger or equal to the secret number

---

### Bonus

* Already done? Let's add more features until you run out of time :)
    * Add all previous guesses to a `<ol>`
    * When the guessed right, output some statistics (e.g. "you guessed the secret number right with 6 tries")
    * Instead of choosing the secret number, let JavaScript generate one using `Math.random()` (see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random))
    * Add a "new game" button that starts a new game with a new secret number

---

### More Bonus

* Seriously? Still time left?
    * Make the maximum number configurable, e.g. to guess numbers from 1 to 1000
    * SUPER HARD: Add a "suggest" button that suggests the optimal next guess based on the previous guesses. Example: User guessed 50, and the secret number is smaller. The next logical best guess would be 25.

---

### And finally

* Try to get as far as you can
* Give us feedback what went easy, what was hard
* When done, paste your HTML and JavaScript to [jsbin](https://jsbin.com/?html,js,output), click `File -> Save Snapshot` and send the jsbin.com link to Slack
