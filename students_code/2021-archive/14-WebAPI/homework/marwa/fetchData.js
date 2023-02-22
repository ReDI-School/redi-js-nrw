const countryName = document.querySelector("#countryName");
const image = document.querySelector("#countryImg");
const divInfo = document.querySelector(".info");
const countryNameInput = document.querySelector("#countryNameInput");
countryNameInput.addEventListener('focusout', getCountry);
async function getCountry() {
  let input = countryNameInput.value;
  let response = await fetch(`https://github.com/public-apis/public-apis/${input}`);
  let result = await response.json();
  let countryNameResult = result[0].name.common;
  countryName.textContent = countryNameResult;
  let capital = result[0].capital;
  let population = result[0].population;
  image.src = result[0].flags.png;
  divInfo.textContent = `capital is ${capital} and population is ${population} `;

}