// here we are going to test our first API call

// let's use this website to test our requests
// https://jsonplaceholder.typicode.com/

// An endpoint is the whole URL of a request:
// First endpoint: https://jsonplaceholder.typicode.com/todos/1

// To test a remote endpoint you could also use: Postman
// Install it,it's a great tool to verify that your endpoint is working

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log("FIRST REQUEST DONE!!! This is my JSON: ", json.title));

async function doMyRequest() {
  // set the spinning wheel on
  let response = await fetch('https://dog.ceo/api/breeds/image/random');
  console.log("random dog fetched!!!");
  let json = await response.json();
  // set the spinning wheel off
  console.log("I am finally ready, this is the object:", json);

  // {
  //   "message": "https://images.dog.ceo/breeds/affenpinscher/n02110627_12556.jpg",
  //   "status": "success"
  // }

  //TODO: 
  // create an <IMG> element
  // set its src to json.message content
  // add this <IMG> to the body of the page
}

console.log("BEFORE the second request");
doMyRequest();
console.log("AFTER the second request");
