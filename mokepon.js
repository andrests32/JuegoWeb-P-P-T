// alert("Te damos la bienvenida a nuestro juego de mokepon");
//Variables para los ataques..
let ataqueJugador;
let ataqueAleatorioEnemigoVariableGlobal;

//Variable vidas de jugadores..
let vidasJugador = 3;
let vidasEnemigo = 3;


function iniciarJuego() {
  let ocultarSeccionAtaque = document.getElementById("seleccionar-ataque");
  ocultarSeccionAtaque.style.display = "none";

  let ocultarBotonReiniciar = document.getElementById("boton-reiniciar");
  ocultarBotonReiniciar.style.display = "none";

  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
 
  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueBotonFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueBotonAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueBotonTierra);

  let botonReiniciarJuego = document.getElementById("boton-reiniciar");
  botonReiniciarJuego.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  let ocultarSeccionAtaque = document.getElementById("seleccionar-ataque");
  ocultarSeccionAtaque.style.display = "flex";

  let ocultarSeccionMascota = document.getElementById("seleccionar-mascota");
  ocultarSeccionMascota.style.display = "none";

  let mas1 = document.getElementById("ROCKY");
  let mas2 = document.getElementById("LOREN");
  let mas3 = document.getElementById("MARVIN");
  let spanMascotaElejidaJugador = document.getElementById(
    "mascota-elejida-jugador"
  );

  if (mas1.checked) {
    // alert("Elegiste a Tortagua");
    spanMascotaElejidaJugador.innerHTML = "ROCKY";
  } else if (mas2.checked) {
    // alert("Elegiste a Tortierra");
    spanMascotaElejidaJugador.innerHTML = "LOREN";
  } else if (mas3.checked) {
    // alert("Elegiste a Torfuego");
    spanMascotaElejidaJugador.innerHTML = "MARVIN";
  } else {
    // alert("Debes elegir una mascota");
  }

  seleccMascotaEnemiga();
}

function seleccMascotaEnemiga() {
  let aleatMascotaEnemiga = alet(1, 3);
  let spanMascotaElejidaEnemigo = document.getElementById(
    "mascota-elejida-enemigo"
  );

  if (aleatMascotaEnemiga == 1) {
    // alert("Tu enemigo eligio a Tortuagua");
    spanMascotaElejidaEnemigo.innerHTML = "ROCKY";
  } else if (aleatMascotaEnemiga == 2) {
    // alert("Tu enemigo eligio a Tortierra");
    spanMascotaElejidaEnemigo.innerHTML = "LOREN";
  } else {
    // alert("Tu enemigo eligio a Torfuego");
    spanMascotaElejidaEnemigo.innerHTML = "MARVIN";
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
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (ataqueJugador == ataqueAleatorioEnemigoVariableGlobal) {
    crearMensaje("Empate");
  } else if (
    ataqueJugador == "Fuego" &&
    ataqueAleatorioEnemigoVariableGlobal == "Tierra"
  ) {
    crearMensaje("Tu Ganas");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (
    ataqueJugador == "Agua" &&
    ataqueAleatorioEnemigoVariableGlobal == "Fuego"
  ) {
    crearMensaje("Tu Ganas");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (
    ataqueBotonTierra == "Tierra" &&
    ataqueAleatorioEnemigoVariableGlobal == "Agua"
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
 let seccionMensaje = document.getElementById('resultados');
 let ataquesDelJugador = document.getElementById('ataques-del-jugador');
 let atquesDelEnemigo = document.getElementById('ataques-del-enemigo');
 
 let nuevoAtaqueDelJugador =  document.createElement('p');
 let nuevoAtaqueDelEnemigo = document.createElement('p');

 seccionMensaje.innerHTML = resultados;
 nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
 nuevoAtaqueDelEnemigo.innerHTML = ataqueAleatorioEnemigoVariableGlobal;

 ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
 atquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
 
}


function crearMensajeFinal(resultadoFinal) {
  let seccionMensaje = document.getElementById("resultados");

  // let parrafo = document.createElement("p");
  seccionMensaje.innerHTML = resultadoFinal;

  // seccionMensaje.appendChild(parrafo);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;

  let ocultarBotonReiniciar = document.getElementById("boton-reiniciar");
  ocultarBotonReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function alet(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
