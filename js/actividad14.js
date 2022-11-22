var m;
m = parseFloat(prompt("Cantidad de Mujeres", ""));
var h;
h = parseFloat(prompt("Cantidad de Hombres", ""));

total = m + h;
pm = (m * 100) / total;
ph = (h * 100) / total;

document.write(
  "Cantidad de Mujeres: " +
    m +
    "<br>" +
    "Cantidad de Hombres: " +
    h +
    "<br>" +
    "Alumnos totales: " +
    total +
    "<br>" +
    "Porcentaje de Mujeres: " +
    pm +
    " %" +
    "<br>" +
    "Porcentaje de Mujeres: " +
    ph +
    " %"
);

var monto;
monto = prompt("Monto para reparaciones", "");

am = monto * 0.35;
aa = monto * 0.25;
aj = monto * 0.1;
av = monto * 0.15;
at = monto * 0.15;

document.write(
  "Monto para reparaciones: S/" +
    monto +
    "<br>" +
    "Avenida La Mar: S/" +
    am +
    "<br>" +
    "Avenida Abancay : S/" +
    aa +
    "<br>" +
    "Avenida 28 de Julio: S/" +
    aj +
    "<br>" +
    "Avenida Aviación: S/" +
    av +
    "<br>" +
    "Avenida Tacna: S/" +
    at
);

var eg;
eg = parseFloat(prompt("Cantidad de entradas generales vendidas", ""));
var eo;
eo = parseFloat(prompt("Cantidad de entradas mayores de 65", ""));
var ey;
ey = parseFloat(prompt("Cantidad de entradas menores de edad", ""));

egv = eg * 150;
eov = eo * 50;
eyv = ey * 80;
monto = parseFloat(egv + eov + eyv);

document.write(
  "Precio Entrada general: S/ 150.00" +
    "<br>" +
    "Entradas generales vendidas: " +
    eg +
    "<br>" +
    "Entrada para mayores de 65: S/ 50.00" +
    "<br>" +
    "Entradas para mayores de 65 vendidas: " +
    eo +
    "<br>" +
    "Entrada para menores de edad: S/ 80.00" +
    "<br>" +
    "Entradas para menores de edad vendidas: " +
    ey +
    "<br>" +
    "Entradas totales vendidas: " +
    monto
);
