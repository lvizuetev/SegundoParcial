const d = document;
const n = navigator;

export default function detectarGeolocalizacion(contendor){

    const $contenedor = d.querySelector(contendor);

    const $latitude = d.createElement("p");
    const $longitude = d.createElement("p");
    const $accuracy = d.createElement("p");
    const $maps = d.createElement("div");
    const $frameMapa = d.createElement("iframe")

    const options = {
        enableHighAccurency: true,
        timeout: 5000,
        maximumAge: 0,
    }

    const success = p => {
        let latitude = p.coords.latitude;
        let longitude = p.coords.longitude;
        let accuracy = p.coords.accuracy;

        let bigSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15066.83738804721!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1628888505026!5m2!1sen!2smx`;
        let smallSrc = `https://www.google.com/maps/@${latitude},${longitude},20z?hl=en`;

        $frameMapa.setAttribute("src", bigSrc);
        $frameMapa.setAttribute("width", `300`);
        $frameMapa.setAttribute("height", `250`);
        $frameMapa.setAttribute("style", `border: 0`);
        $frameMapa.setAttribute("allowfullscreen", ``);
        $frameMapa.setAttribute("loading", `lazy`);

        $latitude.textContent = `Latitud: ${latitude}`;
        $longitude.textContent = `Longitud: ${longitude}`;
        $accuracy.textContent = `Precisión: ${accuracy} metros`;
        $maps.innerHTML = `<a href="${smallSrc}" target="_blank" rel="noopener">Ver mapa en Google Maps</a>`;

        $contenedor.appendChild($latitude);
        $contenedor.appendChild($longitude);
        $contenedor.appendChild($accuracy);
        $contenedor.appendChild($frameMapa);
        $contenedor.appendChild($maps);
    }

    const error = e => {
        const $error = d.createElement("p");
        $error.innerHTML = `Error: <mark>${e.code}: ${e.message}</mark>`;
        $contenedor.appendChild($error);
    }

    n.geolocation.getCurrentPosition(success, error, options);

}