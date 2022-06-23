

var result = '';
function ex2(){
    var num1 = document.getElementById("v0").value;
    var num2 = document.getElementById("v1").value;

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);


    result = (numero1 + numero2);

    document.getElementById("result").innerHTML= num1 + " + " + num2 + " = " + result;
}