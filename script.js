const startPoint = document.querySelector('.from');
const endPoint = document.querySelector('.to');
const routeForm = document.querySelector('#route-form');

const worldCenter = {lat: 49.533771, lng: 31.216160};

function initMap() {

    let dirService = new google.maps.DirectionsService();
    let dirRender = new google.maps.DirectionsRenderer();

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5.5,
        center: worldCenter
    }); 
    
    dirRender.setMap(map);

    routeForm.addEventListener('submit', function(e){
        e.preventDefault();
        showRoute(startPoint.value, endPoint.value, dirService, dirRender);        
    })

    const showRoute = (start, end, serv, rend) => {
        serv.route({
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
        }, function(response, status) {
            if(status === 'OK') {
                rend.setDirections(response)
            } else {
                alert(status);
            }
        })
    }
}

/*ще шукаю де вскрасти апікей з підключеним дірекшнс */
