// Pedir al usuario que ingrese dos números
var num1 = prompt("Ingrese el primer número:");
var num2 = prompt("Ingrese el segundo número:");

// Convertir las entradas a números
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Verificar que los valores ingresados sean válidos
if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, ingrese valores numéricos válidos.");
} else {
    // Estructura condicional para comparar los números
    if (num1 > num2) {
        console.log("El primer número (" + num1 + ") es mayor que el segundo número (" + num2 + ").");
    } else if (num1 < num2) {
        console.log("El segundo número (" + num2 + ") es mayor que el primer número (" + num1 + ").");
    } else {
        console.log("Ambos números son iguales.");
    }
}
