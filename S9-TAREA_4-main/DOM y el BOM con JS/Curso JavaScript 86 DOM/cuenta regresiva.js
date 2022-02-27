const d = document;
let interval;


export default function countdown(elemento, inputFecha, btnMostrar, btnDetener){
    const $count = d.querySelector(elemento);
    const $btnMostrar = d.querySelector(btnMostrar);
    const $btnDetener = d.querySelector(btnDetener);
    const $inputFecha = d.querySelector(inputFecha);

    $inputFecha.setAttribute("min", new Date().toLocaleDateString());

    $btnDetener.setAttribute("disabled", "");

    d.addEventListener("click", (e)=>{
        
        if(e.target.matches(btnMostrar)){
            let fechaUsuario = new Date($inputFecha.value);


            interval = setInterval(()=>{
                let fechaActual = new Date();
                //Se indica 1000 para representar los milisegundos.
                let restaFechas = (fechaUsuario.getTime() - fechaActual.getTime() + 1000) / 1000;


                //Calculo de countdown
                //3600 === (60 * 60) === 60 segundos para formar un minuto * 60 minutos que forman 1 hora
                //3600 * 24 === 36000 * 24 horas que tiene 1 dia...
                /*
                    .slice(numeroNegativo) 
                    Sirve para cortar y obtener solo los ultimos 2 digitos y asi al agregar el cero al principio,
                    no se mostrara cuando se tiene un valor ya de 2 cifras. Ej: 11 no se mostrara como 011.
                    Solo se mostraran los ultimo 2 digitos '11'
                */
                let restaDias = Math.floor(restaFechas / (3600 * 24)); 
                let restaHoras = ('0' + Math.floor(restaFechas / 3600 % 24)).slice(-2);
                let restaMinutos = ('0' + Math.floor(restaFechas / 60 % 60)).slice(-2);
                let restaSegundos = ('0' + Math.floor(restaFechas % 60)).slice(-2);

                let mensaje = `${restaDias} Dias ${restaHoras} Horas ${restaMinutos} Minutos ${restaSegundos} Segundos`

                $count.textContent = mensaje;
                $btnMostrar.setAttribute("disabled", "");
                $btnDetener.removeAttribute("disabled");

                if(restaFechas < 0){
                    $btnMostrar.removeAttribute("disabled", "");
                    $btnDetener.setAttribute("disabled", "");
                    $count.textContent = "El Countdown ha llegado a su fin!!!";
                    clearInterval(interval);
                }
            },1000);
        }

        if(e.target.matches(btnDetener)){
            clearInterval(interval);
            $btnMostrar.removeAttribute("disabled", "false");
            $btnDetener.setAttribute("disabled", "");
            $count.textContent = "";
        }
    });
}