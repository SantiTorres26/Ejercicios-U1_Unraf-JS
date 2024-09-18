// Programa para calcular el área y volumen de un cilindro

// Leer el radio y la altura
var R = prompt("Ingrese el radio del cilindro (R):");
var H = prompt("Ingrese la altura del cilindro (H):");

// Convertir los valores ingresados a números
R = parseFloat(R);
H = parseFloat(H);

// Verificar que los valores ingresados sean números válidos //    FUNCION isNan().

if (isNaN(R) || isNaN(H) || R <= 0 || H <= 0) {
    console.log("Por favor, ingrese valores numéricos válidos y positivos para el radio y la altura.");
} else {
    // Calcular el área lateral
    var areaLateral = 2 * Math.PI * R * H;

    // Calcular el área total
    var areaTotal = 2 * Math.PI * R * (R + H);

    // Calcular el volumen
    var volumen = Math.PI * Math.pow(R, 2) * H;

    // Imprimir los resultados
    console.log("El área lateral del cilindro es: " + areaLateral.toFixed(2));
    console.log("El área total del cilindro es: " + areaTotal.toFixed(2));
    console.log("El volumen del cilindro es: " + volumen.toFixed(2));
}
