const d = document;
const w = window;
let ventana;

export default function tester(form){
    const $form = d.querySelector(form);

    d.addEventListener("submit", e=>{
        e.preventDefault();
        if(e.target === $form){
            ventana = w.open($form.url.value, "", `width=${$form.ancho.value}, height=${$form.alto.value}`);
        }
    });

    d.addEventListener("click", e=>{
        if(e.target === $form.cerrar){
            ventana.close();
        }
    })
}