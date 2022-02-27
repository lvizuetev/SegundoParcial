const d = document;

export default function seleccionarGanador(lista, boton) {
  const $lista = d.querySelector(lista);
  const $boton = d.querySelector(boton);

  d.addEventListener("click", (e) => {
    if (e.target.matches(boton)) {
      let elementos = [...$lista.children];
      const aleatorio = Math.round(Math.random() * (elementos.length - 1));
      alert(
        `El elemento Ganador es el elemento ${elementos[aleatorio].textContent}`
      );
      let ganador = elementos[aleatorio];

      elementos.forEach((e) => {
        if (e.textContent === ganador.textContent) {
          e.classList.add("winner");
        } else {
          e.classList.remove("winner");
        }
      });
    }
  });
}