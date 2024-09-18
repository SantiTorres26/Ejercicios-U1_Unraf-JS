


//EJERCICIO 11 Y 12

var num = prompt("Ingrese un número mayor que cero:");

do {

    if (num > 0) {
        if (num % 2 === 0) {
            console.log("El número es par");
        } else {
            console.log("El número es impar");
        }
    } else {
        console.log("El número no es par ni impar o no es mayor que cero, intente nuevamente.");
    }
} while (num <= 0);

