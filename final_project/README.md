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
       fertilizingPeriod: moment.duration(30, "days").valueOf(),
       wateringPeriod: moment.duration(5, "days").valueOf(),
       lastWatering: moment("2020-05-27 21:30:26").valueOf(),
       lastFertilizing: moment("2020-05-21 21:30:26").valueOf()
   }
];
```

1. Visualize your plant database
1. Use momentjs to compute the time for next watering/fertilizing per plant
1. Add a date input field for entering last water/fertilization date
1. Save data in localStorage
1. Show a notification when an event is due
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

