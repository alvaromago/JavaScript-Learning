document.write("<h2> - 2. Operadores - </h2>");

// ARITMÉTICOS
document.write("<h3>Aritméticos</h3>");

let $num1 = 5;
document.write("<p>Valor base de mi número: " + $num1 + "</p>");
// Adición (+)
$num1 += 3; // 8
document.write("<p>Adición (+=3): " + $num1 + "</p>");
// Sustracción
$num1 -= 3; // 5
document.write("<p>Sustracción (-=3): " + $num1 + "</p>");
// Multiplicación
$num1 *= 2; // 10
document.write("<p>Multiplicación (*=3): " + $num1 + "</p>");
// División
$num1 /= 2; // 5
document.write("<p>División (/=3): " + $num1 + "</p>");
// Resto
$num1 %= 2; // 1
document.write("<p>Resto (%=3): " + $num1 + "</p>");
// Exponenciación
$num1 = 2;
$num1 **= 2; // 4
document.write("<p>Exponenciación (**=3): " + $num1 + "</p>");

// Operadores lógicos
document.write("<h3>Lógicos</h3>");

$num1 = 5;
let $num2 = 5;
document.write(`<p>num1 = ${$num1} ||| num2 = ${$num2}</p>`);
document.write("<p>Equality (==): " + ($num1 == $num2) + "</p>"); // Son lo mismo? (sin incluir tipo)
document.write("<p>Inequality (!=): " + ($num1 != $num2) + "</p>");
document.write("<p>Identity (===): " + ($num1 === $num2) + "</p>"); // Son lo mismo? (incluyendo tipo)
document.write("<p>También tenemos operadores como MAYOR QUE (>), MAYOR O IGUAL QUE (>=), MENOR QUE (<) y MENOR O IGUAL QUE (<=)</p>");
document.write("<p>Y también tenemos los tres operadores lógicos: AND (&&), OR (||) y NOT (!)</p>");
