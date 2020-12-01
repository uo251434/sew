class MapaHandler {
    constructor (){
        this.map;
    }

    initialize() {
        var paris = new google.maps.LatLng( 48.85341, 2.3488 );
        var mapOptions = {
        zoom: 6,
        center: paris
        };
        this.map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
        this.marcador = new google.maps.Marker({position:paris,map:this.map});

    }
    show(){
        google.maps.event.addDomListener(window, 'load', this.map);
    }
}
map = new MapaHandler();
