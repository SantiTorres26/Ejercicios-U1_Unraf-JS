// Función para verificar si un año es bisiesto
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Función para validar la fecha
function esFechaValida(dia, mes, anio) {
    if (anio <= 0 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    }

    var diasEnMes = [31, esBisiesto(anio) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return dia <= diasEnMes[mes - 1];
}

// Función principal para leer y validar la fecha
function leerFecha() {
    var dia = parseInt(prompt("Ingrese el día:"));
    var mes = parseInt(prompt("Ingrese el mes:"));
    var anio = parseInt(prompt("Ingrese el año:"));

    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        console.log("Error: Los valores ingresados no son números válidos.");
        return;
    }

    if (esFechaValida(dia, mes, anio)) {
        var nombresMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        console.log(dia + " de " + nombresMeses[mes - 1] + " de " + anio);
    } else {
        console.log("Error: La fecha ingresada no es válida.");
    }
}

// Llamar a la función principal
leerFecha();
