var elem_origen;
var elem_destino;
function comenzar(){
    elem_origen=document.getElementById("imagen");
    elem_origen.addEventListener("dragstart", comenzamos_arrastrar, false);
    elem_destino=document.getElementById("zonadestino");
    elem_destino.addEventListener("dragenter", function(e){
        e.preventDefault();
    }, false);
    elem_destino.addEventListener("dragover", function(e){
        e.preventDefault();
    }, false);
    elem_destino.addEventListener("drop", soltado, false);
}
function comenzamos_arrastrar(e){
    var codigo="<img src='"+elem_origen.getAttribute("src")+"'>";
    e.dataTransfer.setData("Text", codigo);
}
function soltado(e){
    e.preventDefault();
    elem_destino.innerHTML=e.dataTransfer.getData("Text");
}
window.addEventListener("load", comenzar, false);