const App = document.getElementById("App");

let words = [{
  word: 'Little',
  description: 'Small in size.',
  color: '#FF4081'
}, {
  word: 'Simple',
  description: 'Easily understood or done.',
  color: '#FF5252'
}, {
  word: 'Malicious',
  description: 'Intending to do harm.',
  color: '#FF6E40'
}, {
  word: 'Necessary',
  description: 'Needed to be done.',
  color: '#FFAB40'
}, {
  word: 'Standard',
  description: 'Regularly and widely used.',
  color: '#FFD740'
}];


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
  cover.textContent = text;
  cover.addEventListener("click", () => {
    if (cover.classList.contains("movedCover")) {
      cover.classList.remove("movedCover");
    } else {
      cover.classList.add("movedCover");
    }
  });
  return cover;
}

/**function createCardDiv() {
  let card = document.createElement('div');
  card.classList.add('card');

  let layer = createLayerDiv();
  card.appendChild(layer);

  let cover = createCoverDiv();
  card.appendChild(cover);
  return card;
} **/

App.appendChild(createLayerDiv("Small in size."));
App.appendChild(createCoverDiv("Little"));
