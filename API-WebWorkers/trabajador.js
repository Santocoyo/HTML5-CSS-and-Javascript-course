addEventListener("message", mensaje_recibido, false);
function mensaje_recibido(e){
    var respuesta = "El texto escrito en el cuadro es " + e.data;
    postMessage(respuesta);
}