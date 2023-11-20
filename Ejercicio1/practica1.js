/* Aquí tienes una redacción mejorada para describir la función. 
Crear una función que calcule la edad de una persona. 
La función toma como parámetro el año de nacimiento y devuelve la edad correspondiente.*/

function edadActual(fechaNacimiento, fechaActual){
    let age = fechaActual - fechaNacimiento;
    return age;
}

let nacimiento=Number(prompt("Naciste en?: "));
let ahora=Number(prompt("fecha actual: "));

let resultado = edadActual (nacimiento, ahora);
alert("Ahora tienes: "+resultado);
