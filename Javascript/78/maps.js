/* global $*/
(async function () {
    'use strict';
    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
    let markers = [];

    let placeName = '';
    let position = { lat: 37.7749, lng: -122.4194 };
    const map = new Map(document.getElementById('map'), {
        zoom: 4,
        center: position,
        mapId: 'DEMO_MAP_ID',
    });
    function addMarker(lat, lng, title) {
        const marker = new AdvancedMarkerElement({
            position: { lat: lat, lng: lng },
            map: map,
            title: title,
        });
        markers.push(marker);
    }
    $('#submitButton').click(async function (event) {
        event.preventDefault();
        placeName = document.querySelector('#search').value;


        const geoNamesUrl = `http://api.geonames.org/wikipediaSearchJSON?q=${encodeURIComponent(placeName)}&maxRows=10&username=cstern96`;



        try {
            const response = await fetch(geoNamesUrl);
            const data = await response.json();
            const place = data.geonames[0];
            const lat = place.lat;
            const lng = place.lng;
            const title = place.title;

            addMarker(lat, lng, title);
            map.setCenter({ lat: data.geonames[0].lat, lng: data.geonames[0].lng });
        
    if (data.geonames.length > 0) {
        map.setCenter({ lat: data.geonames[0].lat, lng: data.geonames[0].lng });
    }

}
        catch (error) {
    console.error('Error:', error);
}
    });


}());