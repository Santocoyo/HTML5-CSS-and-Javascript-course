function comenzar(){
    var boton=document.getElementById("grabar").addEventListener("click", item_nuevo, false);
}
function item_nuevo(){
    var clave = document.getElementById("clave").value;
    var valor = document.getElementById("valor").value;
    sessionStorage.setItem(clave, valor);
    leer_mostrar(clave);
}
function leer_mostrar(clave){
    var zonaDatos = document.getElementById("zonaDatos");
    var elValor = sessionStorage.getItem(clave);
    zonaDatos.innerHTML="<div>Clave: " + clave +"--" + "Valor: " + elValor + "</div>";
}
window.addEventListener("load", comenzar, false);