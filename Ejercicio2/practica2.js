/*Desarrollar una función que realice la multiplicación utilizando únicamente sumas. 
La función recibe como parámetros el multiplicador y el multiplicando, 
utiliza un bucle para realizar sumas sucesivas y devolver el resultado. */

function multiplicar(multiplicador,multiplicando){
    let suma=0;
    for (let i=0; i < multiplicador; i++){
        suma = suma + multiplicando;
    }

    return suma;
}
let primerNumero = Number(prompt("ingresar el multiplicando"));
let segundoNumero = Number(prompt("ingresar el multiplicador"));

let resultado=multiplicar(primerNumero, segundoNumero);
alert (resultado);