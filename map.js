var map = L.map('map').setView([37.1880, -3.7180], 9);

var mapa = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
});
mapa.addTo(map);

function onLocationFound(e) {
         var radius = e.accuracy;
         var location = e.latlng
         L.marker(location).addTo(map)
         L.circle(location, radius).addTo(map);
      }
      function onLocationError(e) {
         alert(e.message);
      }
      function getLocationLeaflet() {
         map.on('locationfound', onLocationFound);
         map.on('locationerror', onLocationError);
         map.locate({setView: true, maxZoom: 10});
      }

