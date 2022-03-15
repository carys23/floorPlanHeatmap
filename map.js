var map = L.map('map').setView([53.408371, -2.991573  ], 15);

L.tileLayer('floor-map.png', {
    attribution: 'Liverpool',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

var marker = L.marker([53.408371, -2.991573]).addTo(map);

var popup = L.popup()
.setLatLng([53.408371, -2.991573])
.setContent("I am a standalone popup.")
.openOn(map);