const cuadro = document.querySelectorAll(".cuadro");
const btnMostrar = document.getElementById("mostrarJugadores");
const quienJuega = document.getElementById("quienJuega");
const contenedorJugadores = document.getElementById("contenedorJugadores");
const contenedorTabla = document.getElementById("contenedorTabla");
let inicioTiempo;
let finTiempo;
let tiempoUtilizado;
let controlm = false;
let auxm = false;
let cuadroUno, cuadroDos;
let contador = 0;
let yaJugo;
let yaJugoNombre;

//FUNCIONES
function cambiarJugador() {
  location.reload();
}

function mostrarTabla(){
 let tabla   = document.createElement("table");
 contenedorTabla.innerHTML='';
 let tblBody = document.createElement("tbody");
for(let i=0;i<localStorage.length;i++){
  let clave=localStorage.key(i);
  console.log("Clave: "+clave);
  console.log("Valor: "+localStorage.getItem(clave))
  let hilera = document.createElement("tr");
  let celda = document.createElement("td");
  let textoCelda = document.createTextNode(clave+":"+localStorage.getItem(clave)+" segundos");
  celda.appendChild(textoCelda);
  hilera.appendChild(celda);
   tblBody.appendChild(hilera);
}
  tabla.appendChild(tblBody);
  contenedorTabla.appendChild(tabla);
  tabla.setAttribute("border", "2");
 }

function entrar(idJugador) {
  let tarjeta2;
  const contenedorCarta2 = document.createElement("div");
  fetch(`https://pokeapi.co/api/v2/pokemon/${idJugador}/`)
    .then((response) => response.json())
    .then((data) => {
      tarjeta2 = `<div class="card" style="width: 10rem;">
     <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">Esta jugando: ${data.name}</h5>
      <button class="btn btn-primary" id="btnRecargar" type="submit" onclick="cambiarJugador()">Resetear</button>
      <button class="btn btn-primary mt-1" id="btnTabla" type="submit" onclick="mostrarTabla()">Ver tiempos</button>
     </div>
   </div>`;
      yaJugo = idJugador;
      contenedorCarta2.innerHTML += tarjeta2;
      quienJuega.appendChild(contenedorCarta2);
    });
  inicioTiempo = new Date();
  inicioTiempo = Number(inicioTiempo.getTime());
  let segundaPantalla = document.getElementById("2p");
  let contenedor0 = document.getElementById("c0");
  let contenedor1 = document.getElementById("c1");
  segundaPantalla.className = "muestro2p";
  contenedor1.className = "muestro";
  contenedor0.className = "oculto";
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

function fin() {
  finTiempo = new Date();
  finTiempo = Number(finTiempo.getTime());
  tiempoUtilizado = Math.floor(0.5 + (finTiempo - inicioTiempo) / 1000);

  fetch(`https://pokeapi.co/api/v2/pokemon/${yaJugo}/`)
    .then((response) => response.json())
    .then((data) => {
      yaJugoNombre = data.name;/*ELIMINAR ESTO MAS ADELANTE, LA VARIABLE TAMBIEN */
      localStorage.setItem(data.name, tiempoUtilizado);
    });

  Swal.fire({
    icon: "success",
    title: "Todos los pares encontrados",
    text: `lo resolviste en ${tiempoUtilizado} segundos`,
    showConfirmButton: false,
    timer: 2700,
  });
}

function desactivarCuadros() {
  contador++;
  cuadroUno.removeEventListener("click", darVuelta);
  cuadroDos.removeEventListener("click", darVuelta);
  reset();
  if (contador == 8) {
    setTimeout(fin, 210);
  }
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

async function traerJugador(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  crearTarjeta(data);
}

function generarJugadores(cantidad) {
  for (let i = 1; i <= cantidad; i++) {
    let j = Math.ceil(Math.random() * 200);
    traerJugador(j);
  }
}

function crearTarjeta(pokemon) {
  const contenedorCarta = document.createElement("div");
  const tarjeta = `<div class="card" style="width: 18rem;">
  <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pokemon.name}</h5>
    <button class="btn btn-primary" id="btnIniciar" type="submit" onclick="entrar(${pokemon.id})">INICIAR</button>
  </div>
</div>`;
  contenedorCarta.classList.add("col");
  contenedorCarta.innerHTML += tarjeta;
  contenedorJugadores.appendChild(contenedorCarta);
}

//FIN FUNCIONES
btnMostrar.addEventListener("click", () => {
  generarJugadores(3);
  btnMostrar.classList.add("oculto");
});

cuadro.forEach((cuadro) => cuadro.addEventListener("click", darVuelta));

