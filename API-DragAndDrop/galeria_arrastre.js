var elem_destino;
function comenzar(){
    var imagenes=document.querySelectorAll("#cajaimagen img");
    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener("dragstart", comenzando_arrastrar,false);
    }
    elem_destino=document.getElementById("zonadestino");
    elem_destino.addEventListener("dragenter", entrando,false);
    elem_destino.addEventListener("dragover", function(e){e.preventDefault();},false);
    elem_destino.addEventListener("drop", soltado, false);
    elem_destino.addEventListener("dragleave", saliendo, false);
}
function entrando(e){
    e.preventDefault();
    elem_destino.style.background="rgba(8,252,25,0.8)";
}
function comenzando_arrastrar(e){
    var elemento=e.target;
    e.dataTransfer.setData("Text", elemento.getAttribute("id"));

}
function soltado(e){
    e.preventDefault();
    var id=e.dataTransfer.getData("Text");
    var src=document.getElementById(id).src;
    elem_destino.innerHTML="<img src='"+src+"'>";
}
function saliendo(e){
    e.preventDefault();
    elem_destino.style.background="#FFF";
}
window.addEventListener("load", comenzar, false);