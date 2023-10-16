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
let findheight;
let weidthMapa = window.innerWidth - 20;
findheight = (weidthMapa * 600) / 800;
mapa.width = weidthMapa;
mapa.height = findheight;
let anchoMaxMap = 350;

if (weidthMapa > anchoMaxMap) {
  weidthMapa = anchoMaxMap - 20;
}

class Nuevomokepon {
  constructor(nombre, foto, vida, fotoAvatar) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.alto = 80;
    this.ancho = 80;
    this.x = alet(0, mapa.width - this.ancho);
    this.y = alet(0, mapa.height - this.alto);
    this.mapFoto = new Image();
    this.mapFoto.src = fotoAvatar;
    this.veloy = 0;
    this.velox = 0;
  }

  pintarAvatars() {
    lienzo.drawImage(this.mapFoto, this.x, this.y, this.alto, this.ancho);
  }
}

let rocky = new Nuevomokepon(
  "ROCKY",
  "./img/nino-PhotoRoom.png-PhotoRoom.png",
  3,
  "./img/nino-PhotoRoom.png-PhotoRoom.png"
);
let loren = new Nuevomokepon(
  "LOREN",
  "./img/nina-PhotoRoom.png-PhotoRoom.png",
  3,
  "./img/nina-PhotoRoom.png-PhotoRoom.png"
);
let marvin = new Nuevomokepon(
  "MARVIN",
  "./img/alien-PhotoRoom.png-PhotoRoom.png",
  3,
  "./img/alien-PhotoRoom.png-PhotoRoom.png"
);
let rosco = new Nuevomokepon(
  "ROSCO",
  "./img/rosco-PhotoRoom.png-PhotoRoom.png",
  3,
  "./img/rosco-PhotoRoom.png-PhotoRoom.png"
);
let bob = new Nuevomokepon(
  "BOB",
  "./img/Bob-PhotoRoom.png-PhotoRoom.png",
  3,
  "./img/Bob-PhotoRoom.png-PhotoRoom.png"
);

let rockyEnemigo = new Nuevomokepon(
  "ROCKY",
  "./img/nino-PhotoRoom.png-PhotoRoom.png",
  3,
  "./img/nino-PhotoRoom.png-PhotoRoom.png"
);
let lorenEnemigo = new Nuevomokepon(
  "LOREN",
  "./img/nina-PhotoRoom.png-PhotoRoom.png",
  3,
  "./img/nina-PhotoRoom.png-PhotoRoom.png"
);
let marvinEnemigo = new Nuevomokepon(
  "MARVIN",
  "./img/alien-PhotoRoom.png-PhotoRoom.png",
  3,
  "./img/alien-PhotoRoom.png-PhotoRoom.png"
);
let roscoEnemigo = new Nuevomokepon(
  "ROSCO",
  "./img/rosco-PhotoRoom.png-PhotoRoom.png",
  3,
  "./img/rosco-PhotoRoom.png-PhotoRoom.png"
);
let bobEnemigo = new Nuevomokepon(
  "BOB",
  "./img/Bob-PhotoRoom.png-PhotoRoom.png",
  3,
  "./img/Bob-PhotoRoom.png-PhotoRoom.png"
);

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
  ocultarSeccionMascota.style.display = "none";
  sectionMapa.style.display = "flex";

  if (Rocky.checked) {
    spanMascotaElejidaJugador.innerHTML = Rocky.id;
    mascotaJugador = Rocky.id;
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
  extraerNombres(mascotaJugador);
}

function extraerNombres(mascotaJugador) {
  for (let i = 0; i < nuevoPersonaje.length; i++) {
    if ((mascotaJugador = nuevoPersonaje[i].nombre)) {
      nombre = nuevoPersonaje[i].nombre;
    }
  }
}

function seleccMascotaEnemiga(enemigo) {
  // let aleatMascotaEnemiga = alet(1, 4);
  // let aleatMascotaEnemiga2 = alet(0, nuevoPersonaje.length - 1);
  // if (aleatMascotaEnemiga == 1) {
  //   spanMascotaElejidaEnemigo.innerHTML = "ROCKY";
  // } else if (aleatMascotaEnemiga == 2) {
  //   spanMascotaElejidaEnemigo.innerHTML = "LOREN";
  // } else if (aleatMascotaEnemiga == 3) {
  //   spanMascotaElejidaEnemigo.innerHTML = "MARVIN";
  // } else {
  //   spanMascotaElejidaEnemigo.innerHTML =
  //     nuevoPersonaje[aleatMascotaEnemiga2].nombre;
  // }
  spanMascotaElejidaEnemigo.innerHTML = enemigo.nombre;
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

  objetoAvatarJugador.pintarAvatars();
  rockyEnemigo.pintarAvatars();
  lorenEnemigo.pintarAvatars();
  marvinEnemigo.pintarAvatars();
  roscoEnemigo.pintarAvatars();
  bobEnemigo.pintarAvatars();

  if (objetoAvatarJugador.velox !== 0 || objetoAvatarJugador.veloy !== 0) {
    revisarColision(rockyEnemigo);
    revisarColision(lorenEnemigo);
    revisarColision(marvinEnemigo);
    revisarColision(roscoEnemigo);
    revisarColision(bobEnemigo);
  }
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
  // mapa.width = 320;
  // mapa.height = 250;
  objetoAvatarJugador = obtenerObjetoAvatar(spanMascotaElejidaJugador);
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

function revisarColision(enemigo) {
  const upEnemigo = enemigo.y;
  const downEnemigo = enemigo.y + enemigo.alto;
  const rightEnemigo = enemigo.x + enemigo.ancho;
  const leftEnemigo = enemigo.x;

  const upPlayer = objetoAvatarJugador.y;
  const downPlayer = objetoAvatarJugador.y + objetoAvatarJugador.alto;
  const rightPlayer = objetoAvatarJugador.x + objetoAvatarJugador.ancho;
  const leftPlayer = objetoAvatarJugador.x;

  if (
    downPlayer < upEnemigo ||
    upPlayer > downEnemigo ||
    rightPlayer < leftEnemigo ||
    leftPlayer > rightEnemigo
  ) {
    return;
  }

  stopmove();
  ocultarSeccionAtaque.style.display = "flex";
  sectionMapa.style.display = "none";
  seleccMascotaEnemiga(enemigo);
}

window.addEventListener("load", iniciarJuego);
