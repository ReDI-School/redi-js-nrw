let resultDiv = document.getElementById("result");
let inputElement = document.getElementById("country");

function displayCountry(country) {
    let pre = document.createElement("pre");
    let info = "Country: " + country.name + "\n";
    info += "Capital: " + country.capital + "\n";
    info += "Population: " + country.population;
    pre.textContent = info;
    resultDiv.appendChild(pre);

    let flag = document.createElement("img");
    flag.src = country.flag;
    flag.width = 200;
    resultDiv.appendChild(flag);
}

async function loadCountry(name) {
    let url = "https://restcountries.eu/rest/v2/name/" + name;
    let response = await fetch(url);
    let results = await response.json();
    resultDiv.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
        displayCountry(results[i]);
    }
}

function onButtonClick() {
    loadCountry(inputElement.value);
}
