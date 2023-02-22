//TODO: 
// create an <IMG> element
// set its src to json.message content
// add this <IMG> to the body of the pageasync function doMyRequest() {
async function doMyRequest() {
  let response = await fetch('https://dog.ceo/api/breeds/image/random');
  console.log("random dog fetched!!!");
  let json = await response.json();

  console.log("I am finally ready, this is the object:", json);

  // here I create an <IMG> element

  let image = document.createElement("img");
  // I would like to set its src attribute, to the json.message content
  image.src = json.message;
  // here I add it to the body
  document.body.appendChild(image);
}
doMyRequest();