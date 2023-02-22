const App = document.getElementById("App");


function createLayerDiv(text) {
  let layer = document.createElement('div');
  layer.classList.add('fillParent');
  layer.classList.add('layer');
  layer.textContent = text;
  return layer;
}

function createCoverDiv(text, color) {
  let cover = document.createElement('div');
  cover.classList.add('fillParent');
  cover.classList.add('cover');
  cover.textContent = text;
  cover.style.backgroundColor = color;
  cover.addEventListener("click", () => {
    if (cover.classList.contains("movedCover")) {
      cover.classList.remove("movedCover");
    } else {
      cover.classList.add("movedCover");
    }
  });
  return cover;
}


function createContainerDiv(word, description, color) {
  let container = document.createElement('div');
  container.classList.add("container");
  container.appendChild(createLayerDiv(word));
  container.appendChild(createCoverDiv(description, color));
  return container;
}


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
}, {
  word: "potato",
  description: "its a vegetable",
  color: "red",
}];

for (let item of words) {
  App.appendChild(createContainerDiv(item.word, item.description, item.color))
}
