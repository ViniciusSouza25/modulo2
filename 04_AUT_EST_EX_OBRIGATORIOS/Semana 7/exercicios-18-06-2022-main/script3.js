
nome1 =  document.getElementById("v0").value;
nome2 =  document.getElementById("v1").value;
nome3 =  document.getElementById("v2").value;

var a = [];


function ex3(){
    nome1 =  document.getElementById("v0").value;
    nome2 =  document.getElementById("v1").value;
    nome3 =  document.getElementById("v2").value;


    a = [nome1, nome2, nome3].sort(Intl.Collator().compare);

    
    document.getElementById("result").innerHTML= a[0] + ", " + a[1] + ", " + a[2];
}