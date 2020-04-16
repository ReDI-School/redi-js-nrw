function createLayerDiv() {
  let layer = document.createElement('div');
  // <div></div>

  layer.classList.add('fillParent');
  // <div class='fillParent'></div>
  layer.classList.add('layer');
  // <div class='fillParent layer'></div>

  layer.textContent = 'My Layer';
  // <div class='fillParent layer'>My Layer</div>
  return layer;
}

function createCoverDiv() {
  let cover = document.createElement('div');
  cover.classList.add('fillParent');
  cover.classList.add('cover');
  cover.textContent = 'My Cover';
  cover.onclick = function () {
    if (cover.style.left === '100%') {
      cover.style.left = '0';
    } else {
      cover.style.left = '100%';
    }
  }
  return cover;
}

function createCardDiv() {
  let card = document.createElement('div');
  card.classList.add('card');

  let layer = createLayerDiv();
  card.appendChild(layer);

  let cover = createCoverDiv();
  card.appendChild(cover);

  return card;
}

let list = document.getElementById('wordList');
let card = createCardDiv();
list.appendChild(card);
