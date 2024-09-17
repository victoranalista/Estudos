const { mapa } = require("./script");

// Inicializar o mapa
export function initMap() {
    const latLng = new google.maps.LatLng(-23.550519, -46.633309); // Latitude e longitude de São Paulo
    const mapOptions = {
        center: latLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new waze.com.Map(mapa, mapOptions);

    // Adicionar marcador ao mapa
    const marker = new waze.Marker({
        position: latLng,
        map: map,
        title: 'Localização atual'
    });
}
