/* Buscador de Números Primos (Leidy)

Pide al usuario que ingrese un número entero positivo. :..
Utiliza un ciclo para verificar si cada número desde 2 hasta el número
ingresado es primo.

Almacena los números primos encontrados en un arreglo.

Muestra el arreglo de números primos en la consola. */




let numero_usuario = parseInt (prompt("Ingresa por favor un numero positivo"));

let agregarPrimo = [];

for (i = 2; i <= Math.floor(numero_usuario); i++){
    let primo = true;
    for (y = 2; y <= Math.sqrt (numero_usuario); y++){
        if ( i % y === 0 ){
            primo = false;
        }
    }
} if (primo){
    agregarPrimo.push (i)
}
console.log(`El numero es primo ${numero_usuario}`);













