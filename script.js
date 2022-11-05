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

function comparar(varUno, varDos) {
  if (varUno == varDos) {
    alert("Los valores ingresados son iguales");
  } else {
    alert("Los valores ingresados no son iguales");
  }
}

//Arreglos
let numeros = [];
let numerosAux = [];

do {
  //Pido datos
  let nombreJugador=prompt("Ingrese nombre del jugador");
  let dificultadElegida = parseInt(prompt("Elija la dificultad\n-Presione 1 para fácil\n-Presione 2 para difícil"));
  const jugador= new Jugador(nombreJugador,dificultadElegida);
  jugadores.push(jugador);
  console.log(jugadores);
  // alert(jugador);
  if (dificultadElegida == 1) {
    alert("Nivel de dificultad elegido: Fácil");
  } else if (dificultadElegida == 2) {
    ("Nivel de dificultad elegido: Dificil");
  }
  //pido los numeros para jugar
  alert(
    "Ingrese 8 valores, solo son válidos números enteros\nLos valores se guardaran en un arreglo"
  );

  for (let i = 0; i <= 7; i++) {
    numeros[i] = parseInt(prompt("Ingrese valor de la variable " + i));
    numerosAux[i] = numeros[i];
  }

  //Ordenamiento aleatorio
  numeros = numeros.sort(() => {
    return Math.random() - 0.5;
  });

  //Muestro los valores
  alert(
    "Los valores ingresados en el arreglo son: " +
      numerosAux +
      "\nEl arreglo después del ordenamiento aleatorio es: " +
      numeros
  );

  // alert("Ingrese los valores de las variables 1 y 2, solo son validos números enteros");
  // let cuadroUno = parseInt(prompt("Ingrese valor de la variable 1"));
  // let cuadroDos = parseInt(prompt("Ingrese valor de la variable 2"));

  // alert("El valor de la variable 1 es: "+cuadroUno+"\nEl valor de la variable 2 es: "+cuadroDos);

  // comparar(cuadroUno,cuadroDos);

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
