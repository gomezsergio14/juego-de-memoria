let control = false;
let aux = false;

const btnAgregar = document.getElementById("btnAgregar");
const nombreJugador = document.getElementById("nombreJugador");
const ul = document.getElementById("listaJugadores");

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
//evito recarga de página
btnAgregar.addEventListener('click',(e)=>{
  e.preventDefault();
  // alert("hiciste click amigo");

   //Pido datos
   let estaJugando = nombreJugador.value;
   const li=document.createElement('li');
   const p = document.createElement('p');
   p.textContent = estaJugando;
   li.appendChild(p);
   ul.appendChild(li);
});



  // var dificultadElegida = document.getElementsByName("dificultad");

  // for(var i=0; i<dificultadElegida.length; i++) {
  //   alert(" Elemento: " + dificultadElegida[i].value + "\n Seleccionado: " + dificultadElegida[i].checked);
  // }
  const jugador = new Jugador(nombreJugador, dificultadElegida);
  jugadores.push(jugador);
  alert(`Nombre de jugador: ${nombreJugador}`);

  
  //pido numeros
  // alert(
  //   "Ingrese 8 valores, solo son válidos números enteros\nLos valores se guardaran en un arreglo"
  // );

  // for (let i = 0; i <= 7; i++) {
  //   numeros[i] = parseInt(prompt("Ingrese valor de la variable " + i));
  //   numerosAux[i] = numeros[i];
  // }

  //Ordenamiento aleatorio
  desordenar(numeros);

  //Muestro los valores


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
