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
//////////////////////////////////////////////////////////////////////////
const sectionMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let nuevoPersonaje = [];
let ataqueJugador;
let ataqueAleatorioEnemigoVariableGlobal;

let opcionPersons;
let objetoAvatarJugador;
let Rocky;
let Loren;
let Marvin;
let Rosco1;
let Bob1;
let mascotaJugador;
let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapa.getContext("2d");
let interval;
let mapaBackground = new Image();
mapaBackground.src = "./img/mokemap.png";

class Nuevomokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.x = 20;
    this.y = 30;
    this.alto = 80;
    this.ancho = 80;
    this.mapFoto = new Image();
    this.mapFoto.src = foto;
    this.veloy = 0;
    this.velox = 0;
  }
}

let rocky = new Nuevomokepon(
  "ROCKY",
  "./img/nino-PhotoRoom.png-PhotoRoom.png",
  3
);
let loren = new Nuevomokepon(
  "LOREN",
  "./img/nina-PhotoRoom.png-PhotoRoom.png",
  3
);
let marvin = new Nuevomokepon(
  "MARVIN",
  "./img/alien-PhotoRoom.png-PhotoRoom.png",
  3
);
let rosco = new Nuevomokepon(
  "ROSCO",
  "./img/rosco-PhotoRoom.png-PhotoRoom.png",
  3
);
let bob = new Nuevomokepon("BOB", "./img/Bob-PhotoRoom.png-PhotoRoom.png", 3);

nuevoPersonaje.push(rocky, loren, marvin, rosco, bob);

function iniciarJuego() {
  ocultarSeccionAtaque.style.display = "none";
  sectionMapa.style.display = "none";

  nuevoPersonaje.forEach((persons) => {
    opcionPersons = `<input type="radio" name="mascota" id=${persons.nombre} />
    <label class="stilo-texto-mascota" for=${persons.nombre}>
        <p>${persons.nombre}</p>
        <img src=${persons.foto} alt=${persons.nombre} class="ajuste-img">
    </label>`;
    iyectionpersons.innerHTML += opcionPersons;

    Rocky = document.getElementById("ROCKY");
    Loren = document.getElementById("LOREN");
    Marvin = document.getElementById("MARVIN");
    Rosco1 = document.getElementById("ROSCO");
    Bob1 = document.getElementById("BOB");
  });

  ocultarBotonReiniciar.style.display = "none";
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonFuego.addEventListener("click", ataqueBotonFuego);
  botonAgua.addEventListener("click", ataqueBotonAgua);
  botonTierra.addEventListener("click", ataqueBotonTierra);
  botonReiniciarJuego.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  // ocultarSeccionAtaque.style.display = "flex";
  ocultarSeccionMascota.style.display = "none";
  sectionMapa.style.display = "flex";


  if (Rocky.checked) {
    spanMascotaElejidaJugador.innerHTML = Rocky.id;
    mascotaJugador = Rocky.id
  } else if (Loren.checked) {
    spanMascotaElejidaJugador.innerHTML = Loren.id;
    mascotaJugador = Loren.id;
  } else if (Marvin.checked) {
    spanMascotaElejidaJugador.innerHTML = Marvin.id;
    mascotaJugador = Marvin.id;
  } else if (Rosco1.checked) {
    spanMascotaElejidaJugador.innerHTML = Rosco1.id;
    mascotaJugador = Rosco1.id;
  } else if (Bob1.checked) {
    spanMascotaElejidaJugador.innerHTML = Bob1.id;
    mascotaJugador = Bob1.id;
  } else {
    alert("Elije un Jugador");
  }
  iniciarMapa();
  extraerNombres(mascotaJugador)
  seleccMascotaEnemiga();
}

function extraerNombres(mascotaJugador) {
  for (let i = 0; i < nuevoPersonaje.length; i++) {
    if(mascotaJugador = nuevoPersonaje[i].nombre){
      nombre = nuevoPersonaje[i].nombre
    }
    
  }
}

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

function paintCanvas() {
  objetoAvatarJugador.x = objetoAvatarJugador.x + objetoAvatarJugador.velox;
  objetoAvatarJugador.y = objetoAvatarJugador.y + objetoAvatarJugador.veloy;
  lienzo.clearRect(0, 0, mapa.width, mapa.height);
  lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);
  lienzo.drawImage(objetoAvatarJugador.mapFoto, objetoAvatarJugador.x, objetoAvatarJugador.y, objetoAvatarJugador.alto, objetoAvatarJugador.ancho);
}

function moverAvatarUp() {
  objetoAvatarJugador.veloy = -5;
}

function moverAvatarLeft() {
  objetoAvatarJugador.velox = -5;
}
function moverAvatarDown() {
  objetoAvatarJugador.veloy = 5;
}

function moverAvatarRight() {
  objetoAvatarJugador.velox = 5;
}

function stopmove() {
  objetoAvatarJugador.velox = 0;
  objetoAvatarJugador.veloy = 0;
}

function presskey(event) {
  switch (event.key) {
    case "ArrowUp":
      moverAvatarUp();
      break;

    case "ArrowLeft":
      moverAvatarLeft();
      break;

    case "ArrowDown":
      moverAvatarDown();
      break;

    case "ArrowRight":
      moverAvatarRight();
      break;

    default:
      break;
  }
}

function iniciarMapa() {
  // mapa.width = 40
  // mapa.height = 40
  objetoAvatarJugador = obtenerObjetoAvatar(spanMascotaElejidaJugador)
  interval = setInterval(paintCanvas, 50);

  window.addEventListener("keydown", presskey);
  window.addEventListener("keyup", stopmove);
}

function obtenerObjetoAvatar() {
  for (let i = 0; i < nuevoPersonaje.length; i++) {
    if (mascotaJugador === nuevoPersonaje[i].nombre) {
      return nuevoPersonaje[i];
    }
  }
}

window.addEventListener("load", iniciarJuego);
