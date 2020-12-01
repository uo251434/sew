class CalculadoraUnidades {
    constructor(){

    }
   
    calculate(first, second, value, id){
        var result =  Number(value)/Number(first)*Number(second);
    
        
        document.getElementById(id).value = Math.round((result + Number.EPSILON) * 1000) / 1000;
    }

    
    
}


//var cal =  new Calculadora();
//cal.escribe();