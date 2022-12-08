const cuadro = document.querySelectorAll(".cuadro");
const btnMostrar =document.getElementById("mostrarJugadores");
const contenedorJugadores=document.getElementById("contenedorJugadores");
let inicioTiempo;
let finTiempo;
let tiempoUtilizado;
let controlm = false;
let auxm = false;
let cuadroUno, cuadroDos;
let contador=0;
//FUNCIONES

function entrar(){
  inicioTiempo=new Date();
  inicioTiempo=Number(inicioTiempo.getTime());
  let segundaPantalla=document.getElementById("2p");
  let contenedor0=document.getElementById("c0");
  let contenedor1=document.getElementById("c1");
  segundaPantalla.className="muestro2p";
  contenedor1.className ="muestro";
  contenedor0.className ="oculto";
  
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

function fin(){
  finTiempo=new Date();
  finTiempo=Number(finTiempo.getTime());
  // tiempoUtilizado=finTiempo-inicioTiempo;
  tiempoUtilizado = Math.floor(.5+(finTiempo-inicioTiempo)/1000);
  Swal.fire({
    icon: 'success',
    title: 'Todos los pares encontrados',
    text:`lo resolviste en ${tiempoUtilizado} segundos`,
    showConfirmButton: false,
    timer: 2500
  })
}

function desactivarCuadros() {
  contador++;
  cuadroUno.removeEventListener("click", darVuelta);
  cuadroDos.removeEventListener("click", darVuelta);
  reset();
  if(contador==8){
    setTimeout(fin,210);
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

async function traerPokemon(id){
  const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  const data= await response.json()
  crearTarjeta(data);
}

function generarJugadores(cantidad){
  for(let i=1;i<=cantidad;i++){
    let j= Math.ceil(Math.random()*200);
    traerPokemon(j);
  }
}

function crearTarjeta(pokemon){
  const contenedorCarta=document.createElement("div");
  const tarjeta=`<div class="card" style="width: 18rem;">
  <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pokemon.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary" id="btnIniciar" type="submit" onclick="entrar()">INICIAR</button>
  </div>
</div>`;
contenedorCarta.classList.add("col");
contenedorCarta.innerHTML+=tarjeta;
contenedorJugadores.appendChild(contenedorCarta);

}

//FIN FUNCIONES
btnMostrar.addEventListener('click',()=>{
  generarJugadores(3);
  btnMostrar.classList.add("oculto");
});

cuadro.forEach((cuadro) => cuadro.addEventListener("click", darVuelta));


// btnIniciar.addEventListener("click", (e) => {
//      e.preventDefault();
//     });
//comento lo siguiente para empezar a aplicar fetch
// btnAgregar.addEventListener("click", (e) => {
//   e.preventDefault();
//   let estaJugando = nombreJugador.value;
//   const li = document.createElement("li");
//   const p = document.createElement("p");
//   p.textContent = estaJugando;
//   li.appendChild(p);
//   ul.appendChild(li);
//   const jugador = new Jugador(estaJugando, dificultadElegida);
//   sessionStorage.setItem("nombrePlayer", estaJugando);
//   sessionStorage.setItem("difPlayer", dificultadElegida);

  //muestro por consola lo que esta almacenado en sessionstorage
  // console.log(sessionStorage.getItem("nombrePlayer"));
  // console.log(sessionStorage.getItem("difPlayer"));
//});
