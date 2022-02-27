export function clockFunction(btnIniciar, btnDetener){
    const d = document;
    let clockInterval;

    d.addEventListener("click", (e)=>{
        const $span = d.querySelector("#clock");
        const $btnIniciar = d.querySelector(btnIniciar);

        if(e.target.matches(btnIniciar)){
            $span.textContent = new Date().toLocaleTimeString();
            clockInterval = setInterval(()=>{
                $span.textContent = new Date().toLocaleTimeString();
            },1000);
            $btnIniciar.setAttribute("disabled", "");
        };

        if(e.target.matches(btnDetener)){
            clearInterval(clockInterval);
            // $span.style.display = "none";
            $btnIniciar.removeAttribute("disabled");
            $span.textContent = "";
            console.log("Holi");
        }
    });
}

export function alarmaFunction(btnIniciar, btnDetener){
    const d = document;
    const $audio = d.querySelector("#audio");
    const $btnAlarmaIniciar = d.querySelector("#alarmaIniciar");

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnIniciar)){
            $audio.autoplay = true;
            $audio.load();
            $btnAlarmaIniciar.setAttribute("disabled", "");
        }

        if(e.target.matches(btnDetener)){
            $btnAlarmaIniciar.removeAttribute("disabled");
            $audio.removeAttribute("autoplay");
            $audio.pause();
            $audio.currentTime = 0;
        }
    });

    
}
