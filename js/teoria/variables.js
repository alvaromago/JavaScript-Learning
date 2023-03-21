document.write("<h2> - Variables - </h2>")

let $cadena = "Hola JavaScript"; // type = string
document.write("<p>El tipo de '" + $cadena + "' es: " + typeof($cadena) + "</p>");
let $numero = 14; // type = number
document.write("<p>El tipo de '" + $numero + "' es: " + typeof($numero) + "</p>");
let $booleano = true; // type = boolean
document.write("<p>El tipo de '" + $booleano + "' es: " + typeof($booleano) + "</p>");
const $pi = 3.141592; // Creación de una constante
document.write("<p>Ejemplo de constante pi: " + $pi + "</p>");

document.write("<p>Si concatenas (+) una cadena y un número: " + $cadena + $numero + "</p>"); // Concatenar variable number y string
document.write("<p>Incluso si contactenas dos variables número: " + $numero + $numero + "</p>"); // Concatenar variables number

let $undefined = 3*"Hola"; // type = Undefined
document.write("<p>Multiplicar un número y un string da: " + $undefined + "</p>");
