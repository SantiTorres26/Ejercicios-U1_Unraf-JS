var numeroCorrecto = 26;


function leerNumero() {
    var numero;
    do {
        numero = parseInt(prompt("Introduce un número entre 1 y 100:"));
         
    } while (isNaN(numero) || numero > 100 || numero < 1 ); 
    return numero;
}


function comprobarValor(numeroUsuario, numeroCorrecto) {
    if (numeroUsuario === numeroCorrecto) {
        return 0; 
    } else if (numeroUsuario > numeroCorrecto) {
        return 1; 
    } else {
        return -1; 
    }
}


var numeroUsuario;
var resultado;

do {
    numeroUsuario = leerNumero();
    resultado = comprobarValor(numeroUsuario, numeroCorrecto);

    if (resultado === 0) {
        console.log("¡Felicidades! Has adivinado el número correcto.");
    } else if (resultado === 1) {
        console.log("El número que has introducido es mayor que el correcto.");
    } else {
        console.log("El número que has introducido es menor que el correcto.");
    }
} while (resultado !== 0);
