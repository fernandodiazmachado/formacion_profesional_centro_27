const cantidadFilas = 10;
const cantidadColumnas = 10;
const matriz = crearMatrizNFilas(cantidadFilas, cantidadColumnas);

document.write(matriz.join("<br>"));

let numeroABuscar;
setTimeout(function () {
  do {
    do {
      if (numeroABuscar === -1) {
        if (confirm("Desea Salir?")) {
          break;
        }
      }
      mostrarMatriz();
      numeroABuscar = solicitarNumeroAlUsuario();
    } while (numeroABuscar === -1 || numeroABuscar === "undefined");

    if (numeroABuscar === -1) break;

    if (numeroABuscar !== "undefined") {
      let ubicacionesNumero = buscarNumeroEnMatriz();
      ubicacionesNumero.length > 0
        ? mostrarUbicaciones(ubicacionesNumero)
        : alert(`El numero ${numeroABuscar} no se encuentra en la matriz`);
    }
  } while (confirm("¿Desea ejecutar nuevamente?"));
}, 1000);

function mostrarUbicaciones(ubicaciones) {
  const cantidadApariciones = ubicaciones.length;
  alert(
    `El numero ${numeroABuscar} aparece ${cantidadApariciones} veces en la matriz`
  );

  ubicaciones.forEach((e, index) => {
    alert(`Aparicion ${index + 1} \nFila: ${e[0] + 1}\nColumna: ${e[1] + 1}`);
  });
}

function mostrarMatriz() {
  alert(`MATRIZ: \n ${matriz.join("\n")}`);
}

function buscarNumeroEnMatriz() {
  const ubicacionesNumero = [];
  console.log(matriz);
  console.log(numeroABuscar);
  matriz.forEach((fila, indiceFila) => {
    if (fila.includes(numeroABuscar)) {
      for (const indiceColumna in fila) {
        if (fila[indiceColumna] === numeroABuscar) {
          ubicacionesNumero.push([indiceFila, Number(indiceColumna)]);
        }
      }
    }
  });

  return ubicacionesNumero;
}

function crearMatrizNFilas(filas, columnas) {
  //Forma convencional: 1ro creo la matriz, luego cargo cada elemento
  // const matriz = new Array(filas);
  // for (let i = 0; i < filas; i++) {
  //   matriz[i] = crearFilaNColumnas(columnas);
  // }

  //Utilizando Array.from : Creo y cargo la matriz junto
  const matriz = Array.from({ length: filas }, () =>
    crearFilaNColumnas(columnas)
  );

  return matriz;
}

function crearFilaNColumnas(cantidadColumnas) {
  const fila = Array.from({ length: cantidadColumnas }, () =>
    parseInt(Math.random() * 100)
  );
  return fila;
}

function solicitarNumeroAlUsuario() {
  let numero = Number(prompt("Ingrese un número a buscar en la Matriz"));
  console.log(numero);
  if (isNaN(numero)) {
    alert("El valor ingresado debe ser un numero");
    return -1;
  } else if (numero < 0 || !Number.isInteger(numero)) {
    alert("El valor debe ser positivo y entero");
    return -1;
  } else {
    let confirmacion = confirm(
      `El número ingresado fue: \n${numero} \nSi es correcto, confirme.`
    );
    return confirmacion ? numero : -1;
    1;
  }
}
