function sumar() {
  const numero1 = document.getElementById("num1").value;
  const numero2 = document.getElementById("num2").value;
  let sum = parseInt(numero1) + parseInt(numero2);
  document.getElementById("resultado").innerHTML = sum;
}
