var map = L.map('map').setView([37.1880, -3.7180], 15);

var mapa = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
});
mapa.addTo(map);
