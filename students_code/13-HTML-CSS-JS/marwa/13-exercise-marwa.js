
//const App = document.getElementById("App");
//App.innerHTML = "Hello World";
function createLayerDiv(content) {
  let layer = document.createElement('div')
  layer.classList.add('card');
  layer.classList.add('layer');
  layer.textContent = content ;
  return layer;
}

function createcoverDiv(content) {
  let cover = document.createElement('div');
  cover.classList.add('card');
  cover.classList.add('cover');
  ccover.textContent = content;
  return cover;
}
let parentDiv = document.querySelector('#App');
let myCover = createcoverDiv('My cover');
let myLayer = createLayerDiv('My Layer');
parentDiv.appendChild(myLayer);
parentDiv.appendChild(myCover);