var num1;
num1 = parseFloat(prompt("Ingresa un número", ""));
var num2;
num2 = parseFloat(prompt("Ingresa otro número", ""));
document.write(
  "La suma es: " + (num1 + num2) + "<br>" + "El producto es: " + num1 * num2
);


var num1;
num1 = prompt("Ingresa un número", "");
document.write("Tu número es: " + num1 + "<br>" + "El 20% es: " + num1 * 0.2);



var num;
num = prompt("Ingresa tu medida en metros", "");
cen = num * 100;
mil = cen * 10;
document.write(
  "Tu medida en centímetros es: " +
    cen +
    " cm." +
    "<br>" +
    "Tu medida en centímetros es: " +
    mil +
    " mm."
);



var base;
base = prompt("Ingresa la base", "");
var altura;
altura = prompt("Ingresa la altura", "");
area = (base * altura) / 2;
document.write(
  "Base: " + base + "<br>" + "Altura: " + altura + "<br>" + "Área: " + area
);



var d;
d = prompt("Ingrese la cantidad de dolares", "");
s = d * 3.38;
document.write("Dolares: $" + d + "<br>" + "Soles: S/" + s);



var pul;
pul = prompt("Ingrese la medida", "");
mm = pul * 25.4;
document.write("Pulgadas: " + pul + "<br>" + "Milimetros: " + mm);



num = prompt("Ingrese un numero de tres cifras", "");
sum = 0;

while (num) {
  sum += num % 10;
  num = Math.floor(num / 10);
}

document.write("La suma de sus cifras es:" + sum);



var monto;
monto = prompt("Ingrese un monto", "");
sa = monto * 0.3;
sb = monto * 0.2;
sc = monto * 0.5;
document.write(
  "Su monto es: " +
    monto +
    "<br>" +
    "Socio A: " +
    sa +
    "<br>" +
    "Socio B: " +
    sb +
    "<br>" +
    "Socio C: " +
    sc +
    "<br>"
);



let precio;
precio = parseFloat(prompt("Ingresa el precio del Producto", ""));
igv = precio * 0.19;
document.write(
  "Precio del producto: S/." +
    precio +
    "<br>" +
    "I.G.V.: S/." +
    igv +
    "<br>" +
    "Precio más I.G.V.: S/." +
    (igv + precio)
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
