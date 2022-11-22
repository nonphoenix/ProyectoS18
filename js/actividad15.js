var sueldo;
sueldo = parseInt(prompt("Ingrese su sueldo", ""));
var hijos;
hijos = prompt("Ingrese la cantidad de hijos que tiene", "");
bonificacion = sueldo * 0.7;
sueldoFinal = sueldo * 1.7;
document.write(
"Su sueldo es: S/." + sueldo + " y tiene " + hijos + " hijos " +
"<br>"
);
if (hijos >= 1) {
document.write(
"Le corresponde el bono de: S/." +
bonificacion +
"<br>" +
"Sueldo Final: S/. " +
sueldoFinal
);
} else {
document.write("<br>" +
"No le corresponde ningún bono" + "<br>" + "Sueldo Final: S/. "
+ sueldo
);
}
let num1;
num1 = parseInt(prompt("Ingresa un numero", ""));

porcentaje = num1 * 0.18;

if (num1 > 500) {
  document.write("<br>" +num1 + "<br>" + porcentaje);
}



let num;
num = parseInt(prompt("Ingresa un numero", ""));

let factorial = num;

for (let i = num - 1; i >= 1; i--) {
  factorial = factorial * i;
}
document.write(factorial);
