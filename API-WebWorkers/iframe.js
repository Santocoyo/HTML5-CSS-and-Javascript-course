window.addEventListener("load", comenzar, false);
function comenzar(){
    trabajador = new SharedWorker("trabajador_compartido.js");
    trabajador.port.addEventListener("message", recibido, false);
    trabajador.port.start();
}
function recibido(e){
    zonadatos = document.getElementById("zonadatos");
    zonadatos.innerHTML = e.data;
}