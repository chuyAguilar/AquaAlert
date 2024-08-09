document.addEventListener('DOMContentLoaded', function() {
    // Coordenadas del centro de investigación ANUIES en Valle de Bravo
    var anuiesLat = 19.1961;
    var anuiesLng = -100.1325;

    // Inicializar el mapa
    var map = L.map('map').setView([anuiesLat, anuiesLng], 15);

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Icono personalizado para ANUIES (rojo)
    var anuiesIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // Añadir marcador para ANUIES
    L.marker([anuiesLat, anuiesLng], {icon: anuiesIcon})
     .bindPopup("Centro de Investigación ANUIES - Tu ubicación")
     .addTo(map);

    // Icono personalizado para los puntos de encuentro (azul)
    var meetingPointIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // Definir puntos de encuentro
    var meetingPoints = [
        {lat: 19.1955, lng: -100.1330, name: "Punto de Encuentro 1"},
        {lat: 19.1970, lng: -100.1320, name: "Punto de Encuentro 2"},
        {lat: 19.1965, lng: -100.1335, name: "Punto de Encuentro 3"},
        {lat: 19.1950, lng: -100.1315, name: "Punto de Encuentro 4"},
        {lat: 19.1975, lng: -100.1340, name: "Punto de Encuentro 5"}
    ];

    // Añadir marcadores para los puntos de encuentro
    meetingPoints.forEach(function(point) {
        L.marker([point.lat, point.lng], {icon: meetingPointIcon})
         .bindPopup(point.name)
         .addTo(map);
    });
});