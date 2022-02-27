export function keyboardBall(e, pelota, contenedor){
    const d = document;
    const $pelota = d.querySelector(pelota);
    const $contenedor = d.querySelector(contenedor);

    $pelota.style.top = $pelota.style.top + "0px";
    $pelota.style.right = $pelota.style.right + "0px";
    $pelota.style.bottom = $pelota.style.bottom + "0px";
    $pelota.style.left = $pelota.style.left + "0px";

    if(e.keyCode === 38){ //Fleca Arriba
        if(parseInt($pelota.style.top) > 0){
            $pelota.style.top = parseInt($pelota.style.top)-20+"px";
        }
    }

    if(e.keyCode === 39){ //Fleca Derecha
        if(parseInt($pelota.style.left) < (parseInt(getComputedStyle($contenedor).getPropertyValue("width")) - 80)){
            $pelota.style.left = `${(parseInt($pelota.style.left)+20)}px`;
        }
    }

    if(e.keyCode === 40){ //Fleca Abajo
        if(parseInt($pelota.style.top) < (parseInt(getComputedStyle($contenedor).getPropertyValue("height"))) - 80){
            $pelota.style.top = `${parseInt($pelota.style.top) +20}px`;
        }
    }

    if(e.keyCode === 37){ //Fleca Izquierda
        if(parseInt($pelota.style.left) > 0)
            $pelota.style.left = parseInt($pelota.style.left)-20+"px"
    }
}

export function shortcuts(e){
    if(e.keyCode == 65 && e.altKey){
        alert("Se ha invocado un 'alert' como atajo desde el teclado");
    }

    if(e.keyCode === 80 && e.altKey){
        prompt("Se ha incovado un 'prompt' como atajo desde el teclado");
    }

    if(e.keyCode === 67 && e.altKey){
        confirm("Se ha invocado un 'confirm' como atajo desde el teclado");
    }
}