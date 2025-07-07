let pantalla = document.getElementById("pantalla");
let operacion = "";

function agregar(valor) {
  operacion += valor;
  pantalla.value = operacion;
}

function calcular() {
  try {
    pantalla.value = eval(operacion);
    operacion = pantalla.value;
  } catch (e) {
    pantalla.value = "Error";
    operacion = "";
  }
}

function borrarTodo() {
  operacion = "";
  pantalla.value = "";
}
