export default function hamburgerButton(boton, nav, elemento){
    const d = document;

    //Declarando evento 'click'
    d.addEventListener("click", (e)=>{
        if(e.target.matches(boton)){
            d.querySelector(nav).classList.toggle("is-active");
            d.querySelector(boton).classList.toggle("is-active-btn");
        }

        if(e.target.matches(elemento)){
            d.querySelector(nav).classList.remove("is-active");
            d.querySelector(boton).classList.remove("is-active-btn");
        }
    });
}