// Ejercicio01.- A partir del enunciado reconocer: objetivos, variables, tipos de datos, estructuras de control necesarias.
// Realiza el programa en C, JAVA, Javascript o Python tal que, dado el ingreso del sueldo de un trabajador, le aplique un aumento del 15% si su sueldo es inferior a $1000 y 12% en caso contrario. Imprima el nuevo sueldo del trabajador.
const sueldoAComparar = 1000;
const porcentajeParaSueldoMenor = 0.15;
const porcentajeParaSueldoMayor = 0.12;

function solicitarSueldo() {
  let sueldo = Number(prompt("Ingrese el sueldo del trabajador"));
  if (!isNaN(sueldo) && sueldo > 0) {
    return sueldo;
  } else {
    alert("Ingrese un sueldo válido");
    return -1;
  }
}

function aumentoSueldo(sueldo, porcentaje) {
  alert(
    `Al sueldo ingresado de ${sueldo}.\nSe aplica un aumento de ${
      porcentaje * 100
    }%`
  );
  return (sueldo += sueldo * porcentaje);
}

do {
  let sueldoIngresado = solicitarSueldo();
  if (sueldoIngresado != -1) {
    let nuevoSueldo =
      sueldoIngresado < sueldoAComparar
        ? aumentoSueldo(sueldoIngresado, porcentajeParaSueldoMenor)
        : aumentoSueldo(sueldoIngresado, porcentajeParaSueldoMayor);
    alert(`El nuevo sueldo es de: ${nuevoSueldo}`);
  }
} while (confirm("¿Desea volver a ejecutar?"));
