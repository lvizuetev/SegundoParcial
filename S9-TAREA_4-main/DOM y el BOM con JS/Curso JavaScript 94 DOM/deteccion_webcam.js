const d = document;
const n = navigator;

//Declarar una función async await
export default async function deteccionWebCam(contenedor, limitaciones){

    let stream = null;
    const $contenedor = d.querySelector(contenedor);
    const $video = d.createElement("video");
    const $p = d.createElement("p");
    
    try{
        //Creando etiqueta de video
        $video.classList.add("video-webcam");
        $contenedor.appendChild($video);

        stream = await n.mediaDevices.getUserMedia(limitaciones);
        $video.srcObject = stream;
        $video.play();
    }catch(e){
        // console.error("Error: "+e);
        $p.innerHTML = `Error: <mark>${e}</mark>`;
        $contenedor.appendChild($p);
        $contenedor.removeChild($video);
    }
}