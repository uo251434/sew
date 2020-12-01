class Calculadora {
    constructor(){
        this.mem = 0;
    }
    calcula(){
        var str = document.getElementById('pantalla').value;
        try{
            document.getElementById('pantalla').value = eval(str);
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


cal = new Calculadora();