let c;
c = parseInt(prompt("Ingresa tu importe de compra",''));
p = c * 0.12;
d = c - p;
if (c >= 150) {
document.write(
"Importe: S/" +
c +
"<br>" +
"Descuento: S/" +
p +
"<br>" +
"Importe final: S/" +
d
);
} else {
document.write(
"Importe: S/" +
c +
"<br>" +
"No tiene descuento: S/0" +
"<br>" +
"Importe final: S/" +
c
);
}
let nombre;
nombre = prompt("Ingrese su nombre", "");
let ep;
ep = parseInt(prompt("Ingresa tu nota de examen parcial", ""));
let ef;
ef = parseInt(prompt("Ingresa tu nota de examen final", ""));
let pp;
pp = parseInt(prompt("Ingresa tu nota de promedio de prácticas",
""));
pesoep = ep * 0.25;
pesoef = ef * 0.5;
pesopp = pp * 0.25;
promedioFinal = pesoep + pesoef + pesopp;
document.write("Hola, " + nombre + "<br>");
if (promedioFinal >= 12) {
document.write("Su promedio final es: " + promedioFinal);
}

let robot;
robot = parseInt(prompt("Ingresa la cantidad de robots", ""));
let muneca;
muneca = parseInt(prompt("Ingresa la cantidad de munecas", ""));

pesoDeliveryR = robot;
pesoDeliveryM = 0.5 * muneca;
pesoTotalDelivery = pesoDeliveryR + pesoDeliveryM;

if (pesoTotalDelivery > 10) {
  document.write("Delivery: S/" + "6");
} else {
  document.write("Delivery: S/" + "5");
}
