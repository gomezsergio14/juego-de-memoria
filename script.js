const cuadro = document.querySelectorAll(".cuadro");
const btnAgregar = document.getElementById("btnAgregar");
const nombreJugador = document.getElementById("nombreJugador");
const ul = document.getElementById("listaJugadores");
let controlm = false;
let auxm = false;
let cuadroUno, cuadroDos;
let jugadores = [];
let dificultadElegida = "dificil";

class Jugador {
  constructor(nombre, dificultad) {
    this.nombre = nombre;
    this.dificultad = dificultad;
  }
}

function darVuelta() {
  if (auxm) return;
  if (this === cuadroUno) return;
  this.classList.add("flip");
  if (!controlm) {
    controlm = true;
    cuadroUno = this;
    return;
  }
  cuadroDos = this;
  coincidencia();
}

function coincidencia() {
  let sonIguales = cuadroUno.dataset.carta === cuadroDos.dataset.carta;
  sonIguales ? desactivarCuadros() : ocultar();
}

function desactivarCuadros() {
  cuadroUno.removeEventListener("click", darVuelta);
  cuadroDos.removeEventListener("click", darVuelta);
  reset();
}

function ocultar() {
  auxm = true;
  setTimeout(() => {
    cuadroUno.classList.remove("flip");
    cuadroDos.classList.remove("flip");
    reset();
  }, 600);
}

function reset() {
  [controlm, auxm] = [false, false];
  [cuadroUno, cuadroDos] = [null, null];
}

(function desordenar() {
  cuadro.forEach((cuadro) => {
    let randomPos = Math.floor(Math.random() * 20);
    cuadro.style.order = randomPos;
  });
})();

cuadro.forEach((cuadro) => cuadro.addEventListener("click", darVuelta));


btnAgregar.addEventListener("click", (e) => {
  e.preventDefault();
  let estaJugando = nombreJugador.value;
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = estaJugando;
  li.appendChild(p);
  ul.appendChild(li);
  const jugador = new Jugador(estaJugando, dificultadElegida);
  sessionStorage.setItem("nombrePlayer", estaJugando);
  sessionStorage.setItem("difPlayer", dificultadElegida);

  //muestro por consola lo que esta almacenado en sessionstorage
  console.log(sessionStorage.getItem("nombrePlayer"));
  console.log(sessionStorage.getItem("difPlayer"));
});
