var acu=0;
var c=0;
var media;

while(true){
    num = parseInt(prompt("Ingrese un número (-1) para salir "));
    if(num != -1){
        sum += num;
        c++;
    } else{

        break;
    }

}

media = sum / c;

alert("La meedia aritmetica  es:" + media);