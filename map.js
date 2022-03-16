
var map = L.map('map', {
    crs: L.CRS.Simple
});


// image
var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('floor-map.png', bounds).addTo(map);


map.fitBounds(bounds);

var data =  [
  [ 145, 175.2],
  [ 145, 175.2],
  [ 145, 175.2]
  [ 145, 175.2],
  [ 145, 175.2],
  [ 145, 175.2],
  [ 145, 175.2],
  [ 145, 175.2],

];
L.latLng(data)


L.marker( L.latLng([ 145, 175.2 ] )).addTo(map);
map.setView( [145, 175.2], 15);



 //canavas

// simpleheat('canvas').data(data).draw();
var heat = simpleheat(canvas);

heat.max(5);

heat.add(data);
// heat.data(data);

// set max data value (1 by default)

// var  minOpacity = heat.minOpacity(minOpacity);


// clear data
heat.clear();

heat.radius(25, 15);

// set gradient colors as {<stop>: '<color>'}, e.g. {0.4: 'blue', 0.65: 'lime', 1: 'red'}
heat.gradient({0.4: 'blue', 0.65: 'lime', 1: 'red'});

// call in case Canvas size changed
// heat.resize();
heat.draw();

console.log(heat.draw())

var heat = simpleheat(canvas);