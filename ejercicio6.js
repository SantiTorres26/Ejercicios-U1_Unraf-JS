// Pedir al usuario que ingrese tres números
var num1 = prompt("Ingrese el primer número:");
var num2 = prompt("Ingrese el segundo número:");
var num3 = prompt("Ingrese el tercer número:");

// Convertir las entradas a números
num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

// Verificar que los valores ingresados sean válidos y distintos entre sí
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Por favor, ingrese valores numéricos válidos.");
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Por favor, ingrese tres números distintos.");
} else {
    // Estructura condicional para determinar el número mayor
    if (num1 > num2 && num1 > num3) {
        console.log("El primer número (" + num1 + ") es el mayor.");
    } else if (num2 > num1 && num2 > num3) {
        console.log("El segundo número (" + num2 + ") es el mayor.");
    } else {
        console.log("El tercer número (" + num3 + ") es el mayor.");
    }
}
