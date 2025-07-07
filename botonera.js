
let audioActual = null;

function toggleAudio(id) {
  const nuevoAudio = document.getElementById(id);

  // Si ya hay un audio sonando
  if (audioActual && audioActual !== nuevoAudio) {
    audioActual.pause();
    audioActual.currentTime = 0;
  }

  // Si el mismo audio se está reproduciendo se pausa
  if (audioActual === nuevoAudio && !nuevoAudio.paused) {
    nuevoAudio.pause();
  } else {
    nuevoAudio.currentTime = 0;
    nuevoAudio.play();
    audioActual = nuevoAudio;
  }
}