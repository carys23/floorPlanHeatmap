// var map = L.map('map').setView([53.408371, -2.991573  ], 15);

// L.tileLayer('floor-map.png', {
//     attribution: 'Liverpool',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(map);

// var marker = L.marker([53.408371, -2.991573]).addTo(map);

// var popup = L.popup()
// .setLatLng([53.408371, -2.991573])
// .setContent("I am a standalone popup.")
// .openOn(map);

/// map
var map = L.map('map', {
    crs: L.CRS.Simple
});


// image
var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('floor-map.png', bounds).addTo(map);


map.fitBounds(bounds);

// var map = L.map('map', {
//     crs: L.CRS.Simple,
//     minZoom: -5
// });


// var bounds = [[-26.5,-25], [1021.5,1023]];
// var image = L.imageOverlay('image.png', bounds).addTo(map);

 L.latLng([ 145, 175.2 ])


L.marker( L.latLng([ 145, 175.2 ])).addTo(map);
map.setView( [70, 120], 1);

var lights =  [
    [ 145, 175.2],
    [ 145, 175.2],
    [ 145, 175.2],
    [ 145, 175.2],
    [ 145, 175.2],
    [ 145, 175.2],
 ];

 console.log(lights)

// var yx = L.latLng;

// var xy = function(x, y) {
//     if (L.Util.isArray(x)) {    // When doing xy([x, y]);
//         return yx(x[1], x[0]);
//     }
//     return yx(y, x);  // When doing xy(x, y);
// };

// var sol      = xy(175.2, 145.0);



// heat map



var heat = L.heatLayer( L.latLng([ 145, 175.2 ]), {
  max: 0.5,
  radius : 15, // default value
  blur : 25, // default value
  gradient : { 0.4: 'blue', 0.1: 'lime', 0.7: 'red'} // Values can be set for a scale of 0-1
}).addTo(map);

console.log(heat)
// var mizar    = xy( 41.6, 130.1);
// var kruegerZ = xy( 13.4,  56.5);
// var deneb    = xy(218.7,   8.3);

// L.marker(     sol).addTo(map).bindPopup(      'Sol');
// L.marker(   mizar).addTo(map).bindPopup(    'Mizar');
// L.marker(kruegerZ).addTo(map).bindPopup('Krueger-Z');
// L.marker(   deneb).addTo(map).bindPopup(    'Deneb');
