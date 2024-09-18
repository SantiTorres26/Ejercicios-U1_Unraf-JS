//EJERCICIO 8

var num = prompt("ingrese un número");

if (num >= 0){

    do{
        let potencia = num ** 2;
        let raíz = num ** 0.5;

        console.log("Del número" + num + "la potencia es:" + potencia + "y su raíz es" + raíz );
        break;

    } while( num != 0);
} else{
    alert("El numero es menor o igual a 0");
}