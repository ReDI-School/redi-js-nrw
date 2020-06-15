let plantArray = [];

function displayPlants() {
    let plants = document.getElementById("plants");
    plants.innerHTML = "";
    for (let plant of plantArray) {
        let plantDiv = document.createElement("div");
        plantDiv.classList.add("plant");
        plants.appendChild(plantDiv);
        let name = document.createElement("div");
        let nameLabel = document.createElement("span");
        let nameValue = document.createElement("span");
        plantDiv.appendChild(name);
        name.appendChild(nameLabel);
        name.appendChild(nameValue);
        nameLabel.textContent = "name :  ";
        nameValue.textContent = plant.name;

        let type = document.createElement("div");
        let typeLabel = document.createElement("span");
        let typeValue = document.createElement("span");
        plantDiv.appendChild(type);
        type.appendChild(typeLabel);
        type.appendChild(typeValue);
        typeLabel.textContent = "type :  ";
        typeValue.textContent = plant.type;

        let fertilizingPeriod = document.createElement("div");
        let fertilizingPeriodLabel = document.createElement("span");
        let fertilizingPeriodValue = document.createElement("span");
        plantDiv.appendChild(fertilizingPeriod);
        fertilizingPeriod.appendChild(fertilizingPeriodLabel);
        fertilizingPeriod.appendChild(fertilizingPeriodValue);
        fertilizingPeriodLabel.textContent = "fertilizingPeriod :  ";
        fertilizingPeriodValue.textContent = moment(plant.fertilizingPeriod).days() + " days";




        let wateringPeriod = document.createElement("div");
        let wateringPeriodLabel = document.createElement("span");
        let wateringPeriodValue = document.createElement("span");
        plantDiv.appendChild(wateringPeriod);
        wateringPeriod.appendChild(wateringPeriodLabel);
        wateringPeriod.appendChild(wateringPeriodValue);
        wateringPeriodLabel.textContent = "wateringPeriod :  ";
        wateringPeriodValue.textContent = moment(plant.wateringPeriod).days()+ " days";




        let lastWatering = document.createElement("div");
        let lastWateringLabel = document.createElement("span");
        let lastWateringValue = document.createElement("span");
        let lastWateringDate = moment(plant.lastWatering).format("DD-MM-YYYY");
        plantDiv.appendChild(lastWatering);
        lastWatering.appendChild(lastWateringLabel);
        lastWatering.appendChild(lastWateringValue);
        lastWateringLabel.textContent = "lastWatering :  ";
        lastWateringValue.textContent = lastWateringDate;




        let nextWatering = document.createElement("div");
        let nextWateringLabel = document.createElement("span");
        let nextWateringValue = document.createElement("span");
        plantDiv.appendChild(nextWatering);
        nextWatering.appendChild(nextWateringLabel);
        let nextWateringTime = plant.lastWatering + plant.wateringPeriod;
        let timeToNextWatering = moment(nextWateringTime).fromNow();
        nextWatering.appendChild(nextWateringValue);
        nextWateringLabel.textContent = "nextWatering :  ";
        nextWateringValue.textContent = timeToNextWatering;







        let lastFertilizing = document.createElement("div");
        let lastFertilizingLabel = document.createElement("span");
        let lastFertilizingValue = document.createElement("span");
        plantDiv.appendChild(lastFertilizing);
        lastFertilizing.appendChild(lastFertilizingLabel);

        let lastFertilizingDate = moment(plant.lastFertilizing).format("DD-MM-YYYY");
        lastFertilizing.appendChild(lastFertilizingValue);
        lastFertilizingLabel.textContent = "lastFertilizing :  ";
        lastFertilizingValue.textContent = lastFertilizingDate;



        let nextFertilizing = document.createElement("div");
        let nextFertilizingLabel = document.createElement("span");
        let nextFertilizingValue = document.createElement("span");
        plantDiv.appendChild(nextFertilizing);
        nextFertilizing.appendChild(nextFertilizingLabel);

        let nextFertilizingTime = plant.lastFertilizing + plant.fertilizingPeriod;
        let timeToNextfertilizing = moment(nextFertilizingTime).fromNow();

        nextFertilizing.appendChild(nextFertilizingValue);
        nextFertilizingLabel.textContent = "nextFertilizing :  ";

        nextFertilizingValue.textContent = timeToNextfertilizing;
    }
}

function buttonClicked() {
    let plantObj = {};
    let nameInput = document.getElementById("name");
    let typeInput = document.getElementById("type");
    let fertilizingPeriodInput = document.getElementById("fertilizingPeriod");
    let wateringPeriodInput = document.getElementById("wateringPeriod");
    let lastWateringInput = document.getElementById("lastWatering");
    let lastFertilizingInput = document.getElementById("lastFertilizing");
    plantObj.name = nameInput.value;
    plantObj.type = typeInput.value;

    let fertilizingPeriodInt = parseInt(fertilizingPeriodInput.value);
    plantObj.fertilizingPeriod = moment.duration(fertilizingPeriodInt, "days").valueOf();

    let wateringPeriodInt = parseInt(wateringPeriodInput.value);
    plantObj.wateringPeriod = moment.duration(wateringPeriodInt, "days").valueOf();

    plantObj.lastWatering = moment(lastWateringInput.value).valueOf();
    plantObj.lastFertilizing = moment(lastFertilizingInput.value).valueOf();
    plantArray.push(plantObj);
    savePlants();
    displayPlants();
}

let LOCAL_STORAGE_KEY = 'plantStore';

function savePlants() {
    let plantsAsJsonString = JSON.stringify(plantArray);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, plantsAsJsonString);
}

function loadPlants() {
    let savedPlantsAsJsonString = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedPlantsAsJsonString) {
        plantArray = JSON.parse(savedPlantsAsJsonString);
    }
}

loadPlants();
displayPlants();
