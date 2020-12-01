class ImageSearcher {
   
    constructor(){
        this.flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        this.consulta = "";
    }


    cargarImagenes(multi,lugar,numero){
        this.removeImages();
        $.getJSON(this.flickrAPI, 
            {
                tags: this.consulta,
                tagmode: multi,
                format: "json",
                geo_context: lugar
            }).done(function(data) {
                    $.each(data.items, function(i,item ) {
                        $("<img class = 'flickimg' width='200' height='200'>").attr( "src", item.media.m).appendTo( "#imagenes" );
                        if ( i === 15 ) {
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


//var cal =  new Calculadora();
//cal.escribe();