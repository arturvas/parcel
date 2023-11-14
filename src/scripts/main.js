AOS.init();

// Defina a data alvo
const dataAlvo = new Date("Nov 29, 2023 19:00:00").getTime();

// Atualiza o relógio a cada segundo
const intervaloContador = setInterval(function () {
  // Obtém a data atual
  const dataAtual = new Date().getTime();

  // Calcula a diferença entre a data alvo e a data atual
  const diferenca = dataAlvo - dataAtual;

  // Calcula dias, horas, minutos, segundos até milisegundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  const decimos = Math.floor((diferenca % 1000) / 100);
  const centesimos = Math.floor((diferenca % 100) / 10);
  const milesimos = diferenca % 10;

  // Exibe a contagem regressiva no elemento com id "contador"
  document.getElementById(
    "contador"
  ).innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos},${decimos}${centesimos}${milesimos}s`;

  // Se a contagem regressiva chegar a zero, limpa o intervalo
  if (diferenca <= 0) {
    clearInterval(intervaloContador);
    document.getElementById("contador").innerHTML = " já começou!";
  } else {
    document.getElementById("comecou").innerHTML = ", começa em ";
  }
}, 10);
