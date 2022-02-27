const d = document;
const w = window;

function clearText(input, btnLimpiar) {
  // const $btnClear = d.querySelector(btnLimpiar);
  const $input = d.querySelector(input);

  //Eliminar texto de búsqueda
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnLimpiar)) {
      $input.value = "";
    }
  });
}

export default function filter(input, btnLimpiar, contenedor) {
  clearText(input, btnLimpiar);

  const $input = d.querySelector(input);
  const $contenedor = d.querySelector(contenedor);

  let valor;

  $input.addEventListener("keyup", (e) => {
    console.clear();

    valor = $input.value.toLowerCase();

    //Iterando sobre el texto de cada uno de los Cards 'figcaption'
    $contenedor.querySelectorAll("figure figcaption").forEach((e) => {
      if (e.textContent.toLowerCase().includes(valor)) {
        $contenedor.appendChild(e.parentElement);
        e.parentElement.classList.remove("card_visible");
      } else {
        e.parentElement.classList.add("card_visible");
      }
    });
  });
}