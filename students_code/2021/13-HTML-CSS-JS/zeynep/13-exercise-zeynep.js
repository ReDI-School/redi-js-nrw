
const App = document.getElementById("App");
App.innerHTML = "Hello World";




function createLayerDiv() {
    let myDiv = document.createElement('div');
    myDiv.classList.add('fillParent');
    myDiv.classList.add('layer');
    myDiv.textContent = "my Layer"
    return myDiv;
}

function createADiv() {
    let myFirstDiv =document.createElement('div');
      myFirstDiv.classList.add('new');
      myFirstDiv.classList.add('Div');
      myFirstDiv.classList.remove('Div');
      }
      // create a div name 'new'
