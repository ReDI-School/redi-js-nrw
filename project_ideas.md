# Plant App

## Minimum Viable Product

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
1. Think about a UI for adding / modifying / removing plants

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

# Project ideas:

## Find non-smoking bars

## Free drinking water finding app

## Corona virus tracking app

## International Weather app

## eLearning website

* Show a series of videos on user's choice
* Could be academic or practical life tips

## Multilanguage dictionary

* Translate a word simultaneously into multiple languages
* Useful when meeting with a multilingual crowd

## Deutsche Bahn app

* Show status of elevators and escalators
* Useful for people disabilities

## Plant tracking apps

* Add profile for every plant
* Reminders when to water and when to fertilize
* (maybe) show whether your home is cat/dog friendly

## Movies and TV Series app

* Search for movies and TV
* Show information and trailers

## Tinder for dogs

* Find playdates for your dog

