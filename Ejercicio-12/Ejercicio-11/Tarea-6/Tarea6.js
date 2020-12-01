class MapaHandler {
    constructor (){
        this.map;
        this.key = "AIzaSyBqURIIoOTwpK1OzrYeUEWQYSGfhHBN-3w";
        this.flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        this.consulta = "";
    }


    initialize() {
        var paris = new google.maps.LatLng( 40,  0);
        var mapOptions = {
        zoom: 6,
        center: paris
        };
        this.map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
        
    }

    getCentro(){
        
        return this.map.getCenter();
    }


    cargarImagenes(){
        this.removeImages();
        var pos = this.getCentro();
        var cuadrado = "" + (pos.lng()-5)+"," + (pos.lat()-5) + "," + (pos.lng()+5)+ "," + (pos.lat()+5);
      /*  bbox.push(pos.lng()-5);        
        bbox.push(pos.lat()-5);
        bbox.push(pos.lng()+5);        
        bbox.push(pos.lat()+5);*/
        alert(cuadrado);
        var consulta = this.consulta;
        $.getJSON(this.flickrAPI, 
            {
                tags: consulta,
                format: "json",
                bbox:cuadrado,
                radius_units: "km"
            }).done(function(data) {
                    $.each(data.items, function(i,item ) {
                        $("<img class = 'flickimg' width='200' height='200'>").attr( "src", item.media.m).appendTo( "#imagenes" );
                        if ( i === 10 ) {
                                return false;
                                }
                    });
        });
    }



    addKeyword(keyw){
        if(keyw ==""){
            return;
        }
        if(this.consulta.includes(keyw))
            return;
        this.consulta = this.consulta + ","+keyw;
        var idbtn = "btn" +keyw;
        $("#keywords").append("<p class : 'tag'> -" + keyw +"<p/>");
        $("#textInput").val("");
        
    }

    getValue(id) {
        return $("#" + id).val()
    }

    removekeywords(){
        this.consulta = "";
        $("#keywords").empty();
    }
    removeImages(){
        $("#imagenes").empty();
    }




}
buscador = new MapaHandler();
