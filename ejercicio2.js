// Programa para calcular la hipotenusa de un triángulo rectángulo

// Leer las longitudes de los catetos
var catetoA = prompt("Ingrese la longitud del primer cateto (A):");
var catetoB = prompt("Ingrese la longitud del segundo cateto (B):");

// Convertir los valores ingresados a números
catetoA = parseFloat(catetoA);
catetoB = parseFloat(catetoB);

// Verificar que los valores ingresados sean números válidos
if (isNaN(catetoA) || isNaN(catetoB)) {
    console.log("Por favor, ingrese valores numéricos válidos.");
} else {
    // Calcular la hipotenusa usando el teorema de Pitágoras
    var hipotenusa = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));

    // Imprimir el resultado
    console.log("La hipotenusa del triángulo es: " + hipotenusa);
}
