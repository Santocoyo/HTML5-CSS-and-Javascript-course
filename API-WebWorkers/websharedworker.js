window.addEventListener("load", comenzar, false);
function comenzar(){
    var boton = document.getElementById("boton").addEventListener("click", enviar, false);
    trabajador = new SharedWorker("trabajador_compartido.js");
    trabajador.port.addEventListener("message", recibido, false);
    trabajador.port.start();
}
function enviar(){
    var nombre = document.getElementById("nombre").value;
    trabajador.port.postMessage(nombre);
}
function recibido(e){
    alert(e.data);
}