var divisores=0;


function ex5(){

    divisores = 0; 
    var inicio = document.getElementById("v0").value;
    var fim = document.getElementById("v1").value; 


    while (inicio < fim){
        num = inicio;
        divisores = 0;
        
        for(var count=1 ; count<=num ; count++){
            

            if(num % count == 0)
            {
                divisores++;
            }

        }
        if(divisores==2) {
            document.getElementById("demo").innerHTML += num + '</br>';
        } 
        inicio++;
    }
}
