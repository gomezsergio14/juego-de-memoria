let control = false;
let aux = false;

//clases
class Jugador {
  constructor(nombre, dificultad) {
    this.nombre = nombre;
    this.dificultad = dificultad;
  }
}

//Arreglos
let jugadores = [];
let numeros = [];
let numerosAux = [];

//Funciones
function desordenar(array) {
  array = array.sort(() => {
    return Math.random() - 0.5;
  });
}

do {
  //Pido datos
  let nombreJugador = prompt("Ingrese nombre del jugador");
  let dificultadElegida = parseInt(
    prompt(
      "Elija la dificultad\n-Presione 1 para fácil\n-Presione 2 para difícil"
    )
  );
  const jugador = new Jugador(nombreJugador, dificultadElegida);
  jugadores.push(jugador);

  if (dificultadElegida == 1) {
    alert(
      `Nombre de jugador: ${nombreJugador}\nNivel de dificultad elegido: Fácil`
    );
  } else if (dificultadElegida == 2) {
    alert(
      `Nombre de jugador: ${nombreJugador}\nNivel de dificultad elegido: Dificil`
    );
  }
  //pido numeros
  alert(
    "Ingrese 8 valores, solo son válidos números enteros\nLos valores se guardaran en un arreglo"
  );

  for (let i = 0; i <= 7; i++) {
    numeros[i] = parseInt(prompt("Ingrese valor de la variable " + i));
    numerosAux[i] = numeros[i];
  }

  //Ordenamiento aleatorio
  desordenar(numeros);

  //Muestro los valores
  alert(
    "Los valores ingresados en el arreglo son: " +
      numerosAux +
      "\nEl arreglo después del ordenamiento aleatorio es: " +
      numeros
  );

  aux = parseInt(
    prompt(
      "Desea continuar ingresando valores?\nPresione 1 para continuar\nPresione 2 para salir"
    )
  );
  if (aux == 1) {
    control = true;
  } else if (aux == 2) {
    control = false;
  }
} while (control);
