let continuar = true;
//El valor de continuar cambia a false únicamente con la opcion e
let mensaje = `Seleccione una opcion del menú:
a- Sumar
b- Restar
c- Multiplicar
d- Dividir
e- Salir`;

const mostrarResultado = (resultado, operacion, valor1, valor2) =>
  alert(
    `El resultado de la ${operacion} entre los valores ${valor1} y ${valor2} es: ${resultado}`
  );

const msjDeRetorno = () => alert("Regresando al menú.");

do {
  let respuesta = prompt(mensaje).toLowerCase();
  let confirmacion = false;
  switch (respuesta) {
    case "a":
      confirmacion = confirm(
        "Ud. seleccionó la opcion Sumar.\n¿Desea continuar?"
      );
      confirmacion ? sumar(solicitarDosValores()) : msjDeRetorno();
      break;
    case "b":
      confirmacion = confirm(
        "Ud. seleccionó la opcion Restar.\n¿Desea continuar?"
      );
      confirmacion ? restar(solicitarDosValores()) : msjDeRetorno();
      break;
    case "c":
      confirmacion = confirm(
        "Ud. seleccionó la opcion Multiplicar.\n¿Desea continuar?"
      );
      confirmacion ? multiplicar(solicitarDosValores()) : msjDeRetorno();
      break;
    case "d":
      confirmacion = confirm(
        "Ud. seleccionó la opcion Dividir.\n¿Desea continuar?"
      );
      confirmacion ? dividir(solicitarDosValores("division")) : msjDeRetorno();
      break;
    case "e":
      continuar = false;
      break;
    default:
      alert("Opcion inválida");
      break;
  }
} while (continuar);

function solicitarDosValores(operacion) {
  let valores = [];
  for (let i = 1; i <= 2; i++) {
    let valor;
    let valorInvalido;
    let valorCorrecto;
    do {
      valorInvalido = false;
      valor = Number(prompt(`Ingrese el valor ${i}`));
      if (isNaN(valor)) {
        alert("El número ingresado es inválido");
        valorInvalido = true;
      } else if (operacion === "division" && i == 2 && valor === 0) {
        alert("No se puede dividir por 0.\n Elija un valor distinto de 0");
        valorInvalido = true;
      }
      if (!valorInvalido) {
        valorCorrecto = confirm(
          `El valor ingresado es:\n ${valor}\n Si es correcto, confirme`
        );
      }
    } while (!valorCorrecto);
    valores.push(valor);
  }
  return valores;
}

function sumar(arrayValores) {
  let resultado = arrayValores[0] + arrayValores[1];
  mostrarResultado(resultado, "suma", arrayValores[0], arrayValores[1]);
}
function restar(arrayValores) {
  let resultado = arrayValores[0] - arrayValores[1];
  mostrarResultado(resultado, "restar", arrayValores[0], arrayValores[1]);
}
function multiplicar(arrayValores) {
  let resultado = arrayValores[0] * arrayValores[1];
  mostrarResultado(resultado, "multiplicar", arrayValores[0], arrayValores[1]);
}
function dividir(arrayValores) {
  let resultado = arrayValores[0] / arrayValores[1];
  mostrarResultado(resultado, "dividir", arrayValores[0], arrayValores[1]);
}
