let tamanio = parseInt(prompt("Ingrese la dimension de los arreglos"));

let array1 = [];
let array2 = [];

for (let i = 0; i < tamanio; i ++){
    let nombre = prompt(`Ingresa un nombre para la posición ${i+1}`);
    array1.push(nombre);
    array2.push(nombre.length);

}

for (let i = 0; i < tamanio; i++){
    console.log(`El nombre ${array1} tiene ${array2[i]} caracteres`);
}