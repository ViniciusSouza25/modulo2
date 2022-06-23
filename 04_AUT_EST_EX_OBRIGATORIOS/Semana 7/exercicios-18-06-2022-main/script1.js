 // 

var v0 = document.getElementById("v0");


function ex1(){
    var v0 = document.getElementById("v0").value;
    var calc = '';

    if (v0 > 99 && v0 < 200){
        calc = 1;
    } else 
    if (v0 > 199 && v0 < 300){
        calc = 2;
    } else 
    if (v0 > 299 && v0 < 400){
        calc = 3;
    } else 
    if (v0 > 399 && v0 < 500){
        calc = 4;
    } else 
    if (v0 > 499 && v0 < 600){
        calc = 5;
    } else 
    if (v0 > 599 && v0 < 700){
        calc = 6;
    } else 
    if (v0 > 699 && v0 < 800){
        calc = 7;
    } else 
    if (v0 > 799 && v0 < 900){
        calc = 8;
    } else 
    if (v0 > 899 && v0 < 1000){
        calc = 9;
    }


    if (v0 < 100 || v0 > 999){
        document.getElementById("result").innerHTML= "o número digitado precisa ter 3 digitos";
    } else 
    if (calc % 2 == 0){
        document.getElementById("result").innerHTML= "numero da centena é par";
    } else{
        document.getElementById("result").innerHTML= "numero da centena é impar";
    }

    //alert(v0 + " %2 = " + v0 % 2);
}
