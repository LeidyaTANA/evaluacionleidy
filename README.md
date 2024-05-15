# evaluacionleidy
examen 

#Responiendo a las preguntas 
#4. indica 5 tipos de datos en JavaScript
1. Numero 
2. String: letras
3. Bool; verdadero o falso
4. Null: nulo
5. Indefinido

#5. Describe como se usa la funcion alert en JavaScript 
Un alert es para enviar un mensaje de alerta, o sea para mostrar un mensaje en la consola
una descripcion seria:
console.log("holi mundo")
sale un alerta donde dice: holi mundo 

#8. que son las plantillas literales y como se pueden utilizar 
las plantillas literales nos sirve para no tener que concatenar y sea muy largo. 
en si sirven para que sea mas accesible y rapido, leer con mas facilidad. 
En si son para llamar a una variable y o hasta se pueden realizar operaciones dentro de ellas
y se representan como ${} dentro de una comilla invertida ``

#11. como se utilizan los operadores logicos en JavaScript 

1. && Si dos operaciones son iguales (and) puede ser:
si queremos saber si 10 && 10  son iguales, cosa que si lo es entonces es true

2. || si una de las dos operaciones es verdadera (or)
Como se puede utilizar, este es un ejemplo: 

let usuario_registrado = "Leidy Echeverri";
let contraseña_registrada = "y00011001";

let nombre_usuario = prompt ("Ingresa por favor su nombre de usuario");
let contra_usuario = prompt ("Ingresa por favor su contraseña");

if (nombre_usuario == usuario_registrado && contra_usuario == contraseña_registrada){
    console.log(`Autenticacion exitosa ${usuario_registrado}`);
} else {
    console.log("La autenticacion fallo");
}

Tenemos que para acceder a la pagina debes de ser mayor de edad o Admin, si una de estas dos condiciones se cumple, puedes acceder a ella, en caso de que no, pues no es posible ingresar. 

3. ! el negativo. 
Puedes negar una funcion o ponerla en una condicion

como este ejemplo que se realizo en clase: 

let año = parseInt (prompt("Ingresa un año"));

if (año %4 === 0){
    console.log("El año es bisiesto");
} else if (año %100 !== 0){
    console.log("El año no es bisiesto");
} else if (año %400 === 0){
    console.log("El año es bisiesto");
} 

En si en la parte donde negamos (año %100 !== 0) en si vemos que si el resultado NO
da O, pasa a la siguiente condicion 




