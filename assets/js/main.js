function watch() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const watch = document.querySelector(".watch");
  let segundos = 0;
  let timer;

  function startWatch() {
    timer = setInterval(function () {
      segundos++;
      watch.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      watch.innerHTML = "00:00:00";
      watch.classList.remove("pausado");
      segundos = 0;
    }

    if (el.classList.contains("iniciar")) {
      watch.classList.remove("pausado");
      clearInterval(timer);
      startWatch();
    }

    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      watch.classList.add("pausado");
    }
  });
}
watch();
