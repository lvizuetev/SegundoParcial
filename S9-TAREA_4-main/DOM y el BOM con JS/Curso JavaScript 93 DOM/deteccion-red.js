const d = document;
const n = navigator;
const w = window;

export default function deteccionRed(){
    let intervalo;
    let contador = 0;

    const $alerta = d.createElement("p");
    $alerta.classList.add("network");

    w.addEventListener("online", e=>{
        intervalo = setInterval(()=>{
            $alerta.classList.remove("isOffline");
            $alerta.classList.add("isOnline");
            $alerta.textContent = "Estas Conectado!"
            d.body.appendChild($alerta);
            contador++;
            if(contador === 3){
                clearInterval(intervalo);
                d.body.removeChild($alerta);
                contador = 0;
            }
        },1000);
    });
    
    w.addEventListener("offline", e=>{
        intervalo = setInterval(()=>{
            $alerta.classList.remove("isOnline");
            $alerta.classList.add("isOffline");
            $alerta.textContent = "No Estas Conectado!"
            d.body.appendChild($alerta);
            contador++;
            if(contador === 3){
                clearInterval(intervalo);
                d.body.removeChild($alerta);
                contador = 0;
            }
        },1000);
    });
}