function comenzar(){
    window.addEventListener("message", receptor, false);
}
function receptor(e){
    var zonamensajes = document.getElementById("zonamensajes");
    zonamensajes.innerHTML+="Mensaje desde: " + e.origir + "<br>";
    zonamensajes.innerHTML+="Mensaje: " + e.data + "<br>";
    e.source.postMessage("<br>Mensaje recibido correctamente" + "<br>", e.origin);
}
window.addEventListener("load", comenzar, false);