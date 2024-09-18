// Pedir al usuario que ingrese los valores de A y B
var A = prompt("Ingrese el valor de A:");
var B = prompt("Ingrese el valor de B:");

// Convertir las entradas a números
A = parseFloat(A);
B = parseFloat(B);

// Verificar que los valores ingresados sean válidos
if (isNaN(A) || isNaN(B)) {
    console.log("Por favor, ingrese valores numéricos válidos.");
} else {
    // Mostrar los valores originales
    console.log("Valores originales: A = " + A + ", B = " + B);
    
    // Intercambiar los valores usando una variable temporal
    var temp = A;
    A = B;
    B = temp;

    // Mostrar los valores después del intercambio
    console.log("Valores después del intercambio: A = " + A + ", B = " + B);
}
