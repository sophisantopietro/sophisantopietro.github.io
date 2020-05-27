let puntajesUsuaria = document.querySelector(".puntaje-usuaria p")
let puntajesComputadora = document.querySelector(".puntaje-computadora p")

let puntosUsuaria = 0;
let puntosComputadora = 0;

let eleccionComputadora = "fuego";

let botonHierba = document.querySelector(".hierba");
let botonAgua = document.querySelector(".agua");
let botonFuego = document.querySelector(".fuego");

let resultadoTexto =  document.querySelector('.resultado');

let manoUsuaria = document.querySelector('.mano-usuaria');
let manoComputadora = document.querySelector('.mano-computadora');


let tablero = document.querySelector(".tablero");

botonHierba.onclick = () => {
  resultadoTexto.textContent = "🤔"
  manoComputadora.src = "./assets/pokeball.gif"
  manoUsuaria.src = "./assets/pokeball.gif"
  tablero.classList.add("jugando");
  setTimeout(() => {
      tablero.classList.remove("jugando");
      eleccionUsuaria = "hierba";
      manoUsuaria.src = "./assets/bulbasaur.gif";
      obtenerEleccionComputadora();
      decidirPuntaje();
  }, 2000);
}
botonAgua.onclick = () => {
  resultadoTexto.textContent = "🤔"
  manoComputadora.src = "./assets/pokeball.gif"
  manoUsuaria.src = "./assets/pokeball.gif"
  tablero.classList.add("jugando");
  setTimeout(() => {
      tablero.classList.remove("jugando");
      eleccionUsuaria = "agua";
      manoUsuaria.src = "./assets/squirtle.gif";
      obtenerEleccionComputadora();
      decidirPuntaje();
  }, 2000);
}
botonFuego.onclick = () => {
  resultadoTexto.textContent = "🤔"
  manoComputadora.src = "./assets/pokeball.gif"
  manoUsuaria.src = "./assets/pokeball.gif"
  tablero.classList.add("jugando");
  setTimeout(() => {
      tablero.classList.remove("jugando");
      eleccionUsuaria = "fuego";
      manoUsuaria.src = "./assets/charmander.gif";
      obtenerEleccionComputadora();
      decidirPuntaje();
  }, 2000);
}

const obtenerEleccionComputadora = () => {
  let numeroAlAzar = Math.floor(Math.random() * 3);

  if (numeroAlAzar == 0){
      eleccionComputadora = "hierba";
      manoComputadora.src = "./assets/bulbasaur.gif";
  }
  else if (numeroAlAzar == 1){
      eleccionComputadora = "agua";
      manoComputadora.src = "./assets/squirtle.gif";
  }
  else {
      eleccionComputadora = "fuego";
      manoComputadora.src = "./assets/charmander.gif";
  }
}

const decidirPuntaje = () => {
  if (eleccionComputadora == "hierba") {
    if (eleccionUsuaria == "hierba") {
      resultadoTexto.textContent = "Empate!"
    }
    else if (eleccionUsuaria == "fuego") {
      resultadoTexto.textContent = "Ganaste :)"
      puntosUsuaria++
      puntajesUsuaria.textContent = puntosUsuaria;
    }
    else {
      puntosComputadora++
      puntajesComputadora.textContent = puntosComputadora;
      resultadoTexto.textContent = "Perdiste 💔"
    }
  }
  else if (eleccionComputadora == "agua") {
    if (eleccionUsuaria == "agua") {
      resultadoTexto.textContent = "Empate!"
    }
    else if (eleccionUsuaria == "hierba") {
      resultadoTexto.textContent = "Ganaste :)"
      puntosUsuaria++
      puntajesUsuaria.textContent = puntosUsuaria;
    }
    else {
      puntosComputadora++
      puntajesComputadora.textContent = puntosComputadora;
      resultadoTexto.textContent = "Perdiste 💔"
    }
  }
  else if (eleccionComputadora == "fuego") {
    if (eleccionUsuaria == "fuego") {
      resultadoTexto.textContent = "Empate!"
    }
    else if (eleccionUsuaria == "agua") {
      resultadoTexto.textContent = "Ganaste :)"
      puntosUsuaria++
      puntajesUsuaria.textContent = puntosUsuaria;
    }
    else {
      puntosComputadora++
      puntajesComputadora.textContent = puntosComputadora;
      resultadoTexto.textContent = "Perdiste 💔"
    }
  }
}