class Calculadora {
    constructor(){
        this.mem = 0;
    }
    calcula(){
        var str = document.getElementById('pantalla').value;
        try{
            document.getElementById('pantalla').value = eval(str);
            if(document.getElementById('pantalla').value == "undefined"){
                document.getElementById("pantalla").value = "Syntax Error";
            }
        }catch(err){
            document.getElementById("pantalla").value = "Syntax Error";
        }
    }
    escribe(numero){
       document.getElementById('pantalla').value =document.getElementById('pantalla').value + numero;
    }
    reset(){
        document.getElementById('pantalla').value = "";
    }
    menoryPlus(){
        var num = Number(document.getElementById("pantalla").value);
        if (isNaN(num)){
            document.getElementById("pantalla").value = "Syntax Error";
        }
        else{
            this.mem = num + this.mem;
        }
    }
    menoryMinus(){

        var num = Number(document.getElementById("pantalla").value);
        if (isNaN(num)){
            document.getElementById("pantalla").value = "Syntax Error";
        }
        else{
            this.mem = this.mem - num;
        }
    }
    mr(){
        document.getElementById('pantalla').value = this.mem;
        this.mem = 0;
    }
}

class CalculadoraCientifica extends Calculadora {
    constructor(){
        super();
        this.modoShift = false;

    }
    sin(){
        this.calcula();
        if(this.modoShift){
            document.getElementById('pantalla').value = Math.asin(document.getElementById('pantalla').value);
        }
        else{
            document.getElementById('pantalla').value = Math.sin(document.getElementById('pantalla').value);
        }
    }
    cos(){
        this.calcula();
        if(this.modoShift){
            document.getElementById('pantalla').value = Math.acos(document.getElementById('pantalla').value);
        }
        else{
            document.getElementById('pantalla').value = Math.cos(document.getElementById('pantalla').value);
        }
    }
    log(){
        this.calcula();
        if(this.modoShift){
            document.getElementById('pantalla').value = Math.log10(document.getElementById('pantalla').value);
        }
        else{
            document.getElementById('pantalla').value = Math.log(document.getElementById('pantalla').value);
        }
        
    }
    tan(){
        this.calcula();
        if(this.modoShift){
            document.getElementById('pantalla').value = Math.atan(document.getElementById('pantalla').value);
        }
        else{
            document.getElementById('pantalla').value = Math.tan(document.getElementById('pantalla').value);
        }
    }
    cosh(){
        this.calcula();
        if(this.modoShift){
            document.getElementById('pantalla').value = Math.acosh(document.getElementById('pantalla').value);
        }
        else{
            document.getElementById('pantalla').value = Math.cosh(document.getElementById('pantalla').value);
        }
    }
    sinh(){
        this.calcula();
        if(this.modoShift){
            document.getElementById('pantalla').value = Math.asinh(document.getElementById('pantalla').value);
        }
        else{
            document.getElementById('pantalla').value = Math.sinh(document.getElementById('pantalla').value);
        }
    }
    tanh(){
        this.calcula();
        if(this.modoShift){
            document.getElementById('pantalla').value = Math.atanh(document.getElementById('pantalla').value);
        }
        else{
            document.getElementById('pantalla').value = Math.tanh(document.getElementById('pantalla').value);
        }
    }
    exp(){
        this.calcula();
        document.getElementById('pantalla').value = Math.exp(document.getElementById('pantalla').value);
        
    }
    mr(){
        document.getElementById('pantalla').value = this.mem;
        
    }
    mc(){
        this.mem = 0;
    }
    escribePre(numero){
        document.getElementById('pantalla').value = numero + "(" + document.getElementById('pantalla').value + ")";
    }
    sqrt(){
        this.calcula();
        document.getElementById('pantalla').value = Math.sqrt(document.getElementById('pantalla').value);
    }
    resetAll(){
        document.getElementById('pantalla').value = "";
        this.memory = 0;
    }

    factorial () {
        this.calcula()
        var total = 1; 
        var n = document.getElementById('pantalla').value;
        for (var i=1; i<=n; i++) {
            total = total * i; 
        }
        document.getElementById('pantalla').value = total;
    }

    shift(){
        if(this.modoShift){
            this.modoShift = false;
            document.getElementById('sin').value = "sin";
            document.getElementById('cos').value = "cos";
            document.getElementById('tan').value = "tan";
            document.getElementById('sinh').value = "sinh";
            document.getElementById('cosh').value = "cosh";
            document.getElementById('tanh').value = "tanh";
            document.getElementById('log').value = "log";
        }
        else{
            this.modoShift = true;
            document.getElementById('sin').value = "asin";
            document.getElementById('cos').value = "acos";
            document.getElementById('tan').value = "atan";
            document.getElementById('sinh').value = "asinh";
            document.getElementById('cosh').value = "acosh";
            document.getElementById('tanh').value = "atanh";
            document.getElementById('log').value = "log10";
        }
    }
    
}

//var cal =  new Calculadora();
//cal.escribe();