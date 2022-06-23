function ex4(){
    var max = document.getElementById('v0').value;
    var acul=0;
    var num = 1;
    var conta=0;
    var anterior=0;
    var result="";
    while (acul<max) {
        conta= num+anterior;
        result +="<br>"+ num + " + " + anterior + " = " + conta;
        anterior=num;
        num=conta;
        acul++;
    } 
    document.getElementById("demo").innerHTML=result;
}