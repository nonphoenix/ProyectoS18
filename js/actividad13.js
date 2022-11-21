
//ACTIVIDAD ASINCRONICA------------------------------------------------------------


var nota1;
nota1 = parseFloat(prompt("Ingresa tu Calificación del Examen 1°", ""));
var nota2;
nota2 = parseFloat(prompt("Ingresa tu Calificación del Examen 2°", ""));
var nota3;
nota3 = parseFloat(prompt("Ingresa tu Calificación del Examen 3°", ""));

document.write(
  "Calificación del Examen 1° = " +
    nota1 +
    "<br>" +
    "Calificación del Examen 2° = " +
    nota2 +
    "<br>" +
    "Calificación del Examen 3° = " +
    nota3 +
    "<br>" +
    "Promedio: " +
    (nota1 + nota2 + nota3) / 3
);



var s1;
s1 = parseFloat(prompt("Ingresar sueldo del empleado 1°", ""));
var s2;
s2 = parseFloat(prompt("Ingresar sueldo del empleado 2°", ""));
var s3;
s3 = parseFloat(prompt("Ingresar tu sueldo del empleado 3°", ""));

s1a = s1 * 0.1;
s2a = s2 * 0.12;
s3a = s3 * 0.15;

document.write(
  "Sueldo del empleado 1°: " +
    s1 +
    "<br>" +
    "Sueldo con aumento del empleado 1°: " +
    (s1a + s1) +
    "<br>" +
    "Sueldo del empleado 2°: " +
    s2 +
    "<br>" +
    "Sueldo con aumento del empleado 2°: " +
    (s2a + s2) +
    "<br>" +
    "Sueldo del empleado 3°: " +
    s3 +
    "<br>" +
    "Sueldo con aumento del empleado 3°: " +
    (s3a + s3)
);

var n1;
n1 = parseFloat(prompt("Ingresa tu Calificación del Examen 1°", ""));
var n2;
n2 = parseFloat(prompt("Ingresa tu Calificación del Examen 2°", ""));
var n3;
n3 = parseFloat(prompt("Ingresa tu Calificación del Examen 3°", ""));

pn1 = n1 * 0.3;
pn2 = n2 * 0.3;
pn3 = n3 * 0.4;

final = pn1 + n2 + pn3;

document.write(
  "Calificación del Examen 1°: " +
    n1 +
    "<br>" +
    "Calificación del Examen 2°: " +
    n2 +
    "<br>" +
    "Calificación del Examen 3°: " +
    n3 +
    "<br>" +
    "Calificación Final: " +
    final
);
