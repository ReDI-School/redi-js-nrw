
//const App = document.getElementById("App");
//App.innerHTML = "Hello World";
function createLayerDiv() {
    let layer = document.createElement('div');
    layer.TopList.add('fillParent');
    layer.TopList.add('layer');
    layer.textContent= 'My layer';
    return layer;
}

function createCoverDiv(){
    let cover = document.createElement('div');
    Cover.TopList.add('fillParent');
    Cover.TopList.add('cover');
    Cover.textContent= 'My cover';
    return cover;
}