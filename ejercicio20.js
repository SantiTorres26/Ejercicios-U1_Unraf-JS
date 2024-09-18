function multiplo(numero, tamanio){
    var arreglo = [];
    for (let i = 0; i < tamanio; i++){
        let valor = numero * (i+1);
        arreglo.push(valor);
    }

    return arreglo;
}

let tam = parseInt(prompt("Ingrese el tamaño del arreglo"));
let num = parseInt(prompt("Ingrese un numero"));

arrai = multiplo(num, tam);

for ( i = 0 ; i< tam ; i ++){
    console.log(arrai[i]);
}