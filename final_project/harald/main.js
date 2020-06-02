/*

## MVP

* As a user, I would like to be able to enter my plant data
  * Name of the plant
  * Species
  * Amount of fertilizer
  * Time period of watering
  * Time period of fertilizing
  * Time of last watering
  * Time of last fertilizing

* As a user, I would like to modify the data of existing plants

* As a user, I would like to remove existing plants

* As a user, I would like to be reminded of...
  * Watering plants
  * Fertilizing plants

* As a user, I would like to receive notifications when an event is due

## Protoype

* Create a "static" plant database as an array of objects

```js
let plants = [
   {
       name: "Carlos",
       type: "Avocado",
       fertilizingPeriod: 1000*60*60*24*30,
       wateringPeriod: 1000*60*60*24*5,
       lastWatering: 0,
       lastFertilizing: 0
   }
];
```

1. Visualize your plant database
1. Use momentjs to compute the time for next watering/fertilizing per plant
1. Add a date input field for entering last water/fertilization date
1. Save data in localStorage
1. Research https://developer.mozilla.org/en-US/docs/Web/API/notification - can you create notifications when an event occurs?
1. Think about a UI for adding / removing plants
1. Think about a UI for modifying plants

## BONUS FEATURES

* As a user, I would like to upload a picture of my plant
   * Refer to an external picture database
   * or: Use an API to get a picture for the given species
   * or: Compress and store in localStorage as text
   
* Research https://trefle.io/
* Research https://web.plant.id/plant-identification-api/

* Additional data for a plant:
  * Rotation frequency and angle
  * Date of last pot change
  * Date of harvesting
  * Exposure to sun

* "Share" button to advertise plants on social media

* Show potential allergies / toxins for humans/animals

*/

let plantsElement = document.getElementById("plants");

let plants = [
   {
       name: "Carlos",
       type: "Avocado",
       // note - periods in JavaScript are in milliseconds
       fertilizingPeriod: 1000*60*60*24*30,  // every 30 days
       wateringPeriod: 1000*60*60*24*5,      // every 5 days
       lastWatering: moment("2020-05-27 21:30:26").valueOf(),
       lastFertilizing: moment("2020-05-21 21:30:26").valueOf()
   }
];

for (let plant of plants) {
    let plantElement = document.createElement("div");
  
    let nextWaterDate = plant.lastWatering + plant.wateringPeriod;
    let timeToNextWater = moment(nextWaterDate).fromNow();

    let nextFertilizingDate = plant.lastFertilizing + plant.fertilizingPeriod;
    let timeToNextFertilizing = moment(nextFertilizingDate).fromNow();
  
    plantElement.innerText = 
      plant.type +
      ", " +
      plant.name +
      ", next watering: " +
      timeToNextWater +
      ", next fertilizing: " +
      timeToNextFertilizing;

    plantsElement.appendChild(plantElement);
}

async function identifyPlant(image) {
  let apiKey = "XXX";

  let requestBody = {
    api_key: apiKey,
    images: [ image ]
  };

  let fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  };

  let response = await fetch('https://api.plant.id/v2/identify', fetchOptions);
  let reply = await response.json();

  let idResultsElement = document.getElementById("idResults");
  idResultsElement.textContent = JSON.stringify(reply, null, 4);
}

function fileUploaded(element) {
  let file = element.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  
  reader.onloadend = function() {
    identifyPlant(reader.result);
  }  
}

async function searchPlant() {
  let plantNameElement = document.getElementById("plantName");
  let plantName = plantNameElement.value;
  let token = "XXX";

  let url = "https://trefle.io/api/plants?token=" + token + "&q=" + encodeURIComponent(plantName);

  let response = await fetch(url);
  let reply = await response.json();

  let searchResultsElement = document.getElementById("searchResults");
  searchResultsElement.textContent = JSON.stringify(reply, null, 4);

  if (reply.length > 0) {
    let link = reply[0].link;
    let linkResponse = await fetch(link + "?token=" + token);
    let linkReply = await linkResponse.json();
    searchResultsElement.textContent += JSON.stringify(linkReply, null, 4);      
  }
}
