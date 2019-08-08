function comenzar(){
    var boton = document.getElementById("boton").addEventListener("click", enviar, false);
    window.addEventListener("message", recibir, false);
    recepcion = document.getElementById("zonarecepcion");
}
function enviar(){
    var mensaje = document.getElementById("mensaje").value;
    var iframe = document.getElementById("iframe");
    iframe.contentWindow.postMessage(mensaje, "*");
}
function recibir(e){
    recepcion.innerHTML+=e.data;
}
window.addEventListener("load", comenzar, false);