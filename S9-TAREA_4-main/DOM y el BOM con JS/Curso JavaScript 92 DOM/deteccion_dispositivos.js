const d = document;
const n = navigator;
const ua = n.userAgent;

export default function deteccionDispositivos(contenedor){
    const $contenedor = d.querySelector(contenedor);

    //Detectar el dispositivo movil
    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipod|ipad/i),
        windowsphone: () => ua.match(/windows phone/i),
        any: function(){
            return this.android() || this.ios() || this.windowsphone()
        },
    }

    //Detectar la computadora
    const isDesktop = {
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        linux: () => ua.match(/linux/i),
        any: function(){
            return this.mac() || this.windows() || this.linux();
        },
    }

    //Detectar el navegador
    const isBrowser = {
        chrome: () => ua.match(/chrome/i),
        firefox: () => ua.match(/firefox/i),
        safari: () => ua.match(/safari/i),
        opera: () => ua.match(/opr|opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge|edg/i),
        any: function(){
            return this.chrome() || this.firefox() || this.safari() || this.opera || this.ie || this.edge();
        },
    }
    // console.log(ua);

    $contenedor.innerHTML = `
        <ul>
            <p>User Agent: ${ua}</p>
            <p>Dispositivo Detectado: ${isMobile.any() ? isMobile.any() : isDesktop.any()}</p>
            <p>Navegador Detectado: ${isBrowser.any()}</p>
        </ul>
    `

}