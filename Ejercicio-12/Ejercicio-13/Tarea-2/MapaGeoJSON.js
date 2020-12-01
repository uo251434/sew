class kmlManager {
    constructor (){
        this.info;
        this.map;
        this.rutas;
    }
    precessFile() {
        var nBytes = 0,
        archivos = document.getElementById("subirArchivos").files;
        var archivo = archivos[0];
        var datosKml = document.getElementById("datosgeoJSON");

        var lector =  new FileReader();

        lector.onload = function (evento){
        }
        lector.readAsText(archivo);

        var mapaVar = this.map;
        lector.onload = function () {
            var datos = JSON.parse(lector.result);

            for(var i = 0 ; i < datos.features.length; i++){
                var coordenadas = datos.features[i].geometry.coordinates;
                var coordenadasRuta = [];
                alert(coordenadas.length);
                for(var j = 0; j< coordenadas.length; j++){
                        var punto = new Object();
                        punto.lat = parseFloat(coordenadas[j][1]);                        
                        punto.lng = parseFloat(coordenadas[j][0]);
                        //alert(splitCoord);
                        coordenadasRuta.push(punto);
                    
                }  
                const flightPath = new google.maps.Polyline({
                    path: coordenadasRuta,
                    geodesic: true,
                    strokeColor: "#FF0000",
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                    map:mapaVar
                });
                flightPath.setMap(mapaVar);          
            }
            //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
            //La propiedad "result" es donde se almacena el contenido del archivo
            //Esta propiedad solamente es válida cuando se termina la operación de lectura
        }   
    }    
    initialize() {

        //var rutas = new kmlManager().precessFile();
        var paris = new google.maps.LatLng( 48.85341, 2.3488 );
        var mapOptions = {
        zoom: 2,
        center: paris
        };
        this.map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

        
    }

    loadScript(){
        $("#footer").append("<script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU&callback=manager.initialize\"></script>  ");
    }
}
manager = new kmlManager();

//var cal =  new Calculadora();
//cal.escribe();