const ocultarSeccionAtaque = document.getElementById("seleccionar-ataque");
const ocultarBotonReiniciar = document.getElementById("boton-reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciarJuego = document.getElementById("boton-reiniciar");
//////////////////////////////////////////////////////////////////////
const ocultarSeccionMascota = document.getElementById("seleccionar-mascota");

const spanMascotaElejidaJugador = document.getElementById(
  "mascota-elejida-jugador"
);

////////////////////////////////////////////////////////////////////////
const spanMascotaElejidaEnemigo = document.getElementById(
  "mascota-elejida-enemigo"
);
///////////////////////////////////////////////////////////////////////
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

///////////////////////////////////////////////////////////////////////
const seccionMensaje = document.getElementById("resultados");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

/////////////////////////////////////////////////////////////////////////
const iyectionpersons = document.getElementById("iyection-persons");

let nuevoPersonaje = [];
let ataqueJugador;
let ataqueAleatorioEnemigoVariableGlobal;

let opcionPersons;
let mas1;
let mas2;
let mas3;
let mas4;
let mas5;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Nuevomokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
  }
}

let rosco = new Nuevomokepon(
  "ROSCO",
  "./img/rosco-PhotoRoom.png-PhotoRoom.png",
  3
);
let bob = new Nuevomokepon("BOB", "./img/Bob-PhotoRoom.png-PhotoRoom.png", 3);

nuevoPersonaje.push(rosco, bob);

function iniciarJuego() {
  ocultarSeccionAtaque.style.display = "none";

  nuevoPersonaje.forEach((persons) => {
    opcionPersons = `<input type="radio" name="mascota" id=${persons.nombre} />
    <label class="stilo-texto-mascota" for=${persons.nombre}>
        <p>${persons.nombre}</p>
        <img src=${persons.foto} alt=${persons.nombre} class="ajuste-img">
    </label>`;
    iyectionpersons.innerHTML += opcionPersons;
    mas1 = document.getElementById("ROCKY");
    mas2 = document.getElementById("LOREN");
    mas3 = document.getElementById("MARVIN");
    mas4 = document.getElementById("ROSCO");
    mas5 = document.getElementById("BOB");
  });

  ocultarBotonReiniciar.style.display = "none";
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonFuego.addEventListener("click", ataqueBotonFuego);
  botonAgua.addEventListener("click", ataqueBotonAgua);
  botonTierra.addEventListener("click", ataqueBotonTierra);
  botonReiniciarJuego.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  ocultarSeccionAtaque.style.display = "flex";
  ocultarSeccionMascota.style.display = "none";
  if (mas1.checked) {
    spanMascotaElejidaJugador.innerHTML = "ROCKY";
  } else if (mas2.checked) {
    spanMascotaElejidaJugador.innerHTML = "LOREN";
  } else if (mas3.checked) {
    spanMascotaElejidaJugador.innerHTML = "MARVIN";
  } else if (mas4.checked) {
    spanMascotaElejidaJugador.innerHTML = "ROSCO";
  } else {
    spanMascotaElejidaJugador.innerHTML = "BOB";
  }
}

seleccMascotaEnemiga();

function seleccMascotaEnemiga() {
  let aleatMascotaEnemiga = alet(1, 4);
  let aleatMascotaEnemiga2 = alet(0, nuevoPersonaje.length - 1);
  if (aleatMascotaEnemiga == 1) {
    spanMascotaElejidaEnemigo.innerHTML = "ROCKY";
  } else if (aleatMascotaEnemiga == 2) {
    spanMascotaElejidaEnemigo.innerHTML = "LOREN";
  } else if (aleatMascotaEnemiga == 3) {
    spanMascotaElejidaEnemigo.innerHTML = "MARVIN";
  } else {
    spanMascotaElejidaEnemigo.innerHTML =
      nuevoPersonaje[aleatMascotaEnemiga2].nombre;
  }
}


function ataqueBotonFuego() {
  ataqueJugador = "Piedra";
  ataqueAleatorioEnemigo();
}

function ataqueBotonAgua() {
  ataqueJugador = "Papel";
  ataqueAleatorioEnemigo();
}

function ataqueBotonTierra() {
  ataqueJugador = "Tijera";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueBotonAleatorioEnemigoCondicional = alet(1, 3);
  if (ataqueBotonAleatorioEnemigoCondicional == 1) {
    ataqueAleatorioEnemigoVariableGlobal = "Piedra";
  } else if (ataqueBotonAleatorioEnemigoCondicional == 2) {
    ataqueAleatorioEnemigoVariableGlobal = "Papel";
  } else {
    ataqueAleatorioEnemigoVariableGlobal = "Tijera";
  }

  combates();
}

function combates() {
  if (ataqueJugador == ataqueAleatorioEnemigoVariableGlobal) {
    crearMensaje("Empate");
  } else if (
    ataqueJugador == "Piedra" &&
    ataqueAleatorioEnemigoVariableGlobal == "Tijera"
  ) {
    crearMensaje("Tu Ganas");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (
    ataqueJugador == "Tijera" &&
    ataqueAleatorioEnemigoVariableGlobal == "Papel"
  ) {
    crearMensaje("Tu Ganas");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (
    ataqueJugador == "Papel" &&
    ataqueAleatorioEnemigoVariableGlobal == "Piedra"
  ) {
    crearMensaje("Tu Ganas");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("Tu Pierdes");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if (vidasJugador == 0) {
    crearMensajeFinal("Oh! Perdiste 😭");
  } else if (vidasEnemigo == 0) {
    crearMensajeFinal("Felicidades Ganaste 🎊");
  }
}

function crearMensaje(resultados) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");
  seccionMensaje.innerHTML = resultados;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueAleatorioEnemigoVariableGlobal;
  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  seccionMensaje.innerHTML = resultadoFinal;
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
  ocultarBotonReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function alet(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
