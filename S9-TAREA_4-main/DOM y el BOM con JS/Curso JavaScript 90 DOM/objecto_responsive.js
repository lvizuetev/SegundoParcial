const d = document;
const w = window;
const elementoA = d.createElement("a");

export default function responsiveJS(contenedor, contenidoMovil, contenidoDesktop){

    const $contenedor = d.querySelector(contenedor);
    let mql = w.matchMedia('(max-width: 630px)');

    const responsive = (e) =>{
        if(e.matches){
            $contenedor.innerHTML = contenidoMovil;
        }else{
            $contenedor.innerHTML = contenidoDesktop;
        }
    }

    mql.addEventListener("change", responsive);
    responsive(mql);
}