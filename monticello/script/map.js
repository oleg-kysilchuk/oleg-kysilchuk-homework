const mapCenter = {lat: 40.661852,lng: -73.858040};
const place = {lat: 40.679034, lng: -73.895149};

function initMap() {

    let styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            },

            {
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            },

            {
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#616161"}]
            },

            {
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#f5f5f5"}]
            },

            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#bdbdbd"}]
            },

            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{"color": "#eeeeee"}]
            },

            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#757575"}]
            },

            {
                "featureType": "poi.business",
                "stylers": [{"visibility": "off"}]
            },

            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#e5e5e5"}]
            },

            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [{"visibility": "off"}]
            },

            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            },

            {
                "featureType": "road",
                "stylers": [{"visibility": "off"}]
            },

            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"color": "#ffffff"}]
            },

            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#757575"}]
            },

            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{"color": "#dadada"}]
            },

            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#616161"}]
            },

            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            },

            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{"color": "#e5e5e5"}]
            },

            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{"color": "#eeeeee"}]
            },

            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#c9c9c9"}]
            },

            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            }
        ],
        {name: 'Styled Map'});


    let  map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 13.2,
            center: mapCenter,
            disableDefaultUI: true,
            mapTypeControlOptions: {
                mapTypeIds: ['styled_map']
            }
        });

        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');


        let marker = new google.maps.Marker({
            position: place,
            map: map,
            icon: './assets/marker-icon.png'
          });

}



