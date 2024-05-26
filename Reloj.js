

function actualizarReloj() {
  var ahora = new Date();

  var horas = ahora.getHours();
  var minutos = ahora.getMinutes();
  var segundos = ahora.getSeconds();

  horas = formatoTiempo(horas);
  minutos = formatoTiempo(minutos);
  segundos = formatoTiempo(segundos);

  document.getElementById('reloj').innerHTML = horas + ":" + minutos + ":" + segundos;

  setTimeout(actualizarReloj, 1000); // Actualiza el reloj cada segundo
}

function formatoTiempo(tiempo) {
  if (tiempo < 10) {
    tiempo = "0" + tiempo;
  }
  return tiempo;
}

actualizarReloj(); // Llamar a la función para iniciar el reloj