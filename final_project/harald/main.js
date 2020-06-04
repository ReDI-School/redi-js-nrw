let plantsElement = document.getElementById("plants");

let plants = [
   {
       name: "Carlos",
       type: "Avocado",
       // note - periods in JavaScript are in milliseconds
       fertilizingPeriod: moment.duration(30, "days").valueOf(),  // every 30 days
       wateringPeriod: moment.duration(5, "days").valueOf(),      // every 5 days
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
    searchResultsElement.textContent += "\n\n" + JSON.stringify(linkReply, null, 4);
    searchResultsElement.textContent += JSON.stringify(linkReply, null, 4);
  }
}

async function plantNetUploaded(element) {
  let apiKey = "XXX";

  // required because my-api.planetnet.org does not set CORS headers
  let corsProxy = "https://cors-anywhere.herokuapp.com/";

  let organs = document.getElementById("planetNetSelect").value;

  // plantnet API expects FormData (multipart/form-data)
  let form = new FormData();
  form.append('organs', organs);
  form.append('images', element.files[0]);

  let reply = await fetch(corsProxy + 'https://my-api.plantnet.org/v2/identify/all?api-key=' + apiKey,
  {
    body: form,
    method: 'POST'
  });
  let response = await reply.json();

  let resultElement = document.getElementById("plantNetResults");
  resultElement.textContent = JSON.stringify(response, null, 4);
}

// A simple function to show a notification
async function testNotification() {
  // we first have to ask the user for permission to send notifications
  if (Notification.permission === "default") {
    // requestPermission is async. We need to wait for the user to confirm
    await Notification.requestPermission();
  }

  // check again whether we're granted notifications, because
  // Notification.permission might have changed during the async call
  if (Notification.permission === "granted") {
    let notification = new Notification("Testing, testing, 123...");
  }
}
