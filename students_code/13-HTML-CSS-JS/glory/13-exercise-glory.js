const App = document.getElementById("App");

function createLayerDiv(text) {
  let layer = document.createElement('div');
  layer.classList.add('fillParent');
  layer.classList.add('layer');
  layer.textContent = text;
  return layer;
}

function createCoverDiv(text) {
  let cover = document.createElement('div');
  cover.classList.add('fillParent');
  cover.classList.add('cover');
  cover.textContent =  text;
  return cover;
}




App.appendChild(createLayerDiv("my layer"));
App.appendChild(createCoverDiv("my cover"));