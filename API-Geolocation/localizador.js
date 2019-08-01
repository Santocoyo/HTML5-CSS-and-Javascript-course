function comenzar(){
    var miboton=document.getElementById("dame_ubicacion");
    miboton.addEventListener("click", obtener, false);
}
function obtener(){
    navigator.geolocation.getCurrentPosition(mostrar_posicion);
}
function mostrar_posicion(posicion){
    var ubicacion=document.getElementById("ubicacion");
    var miubicacion="";
    miubicacion+="Latitud: " + posicion.coords.latitude + "<br>";
    miubicacion+="Longitud: " + posicion.coords.longitude + "<br>";
    miubicacion+="Exactitud: " + posicion.coords.accuracy + "<br>";
    ubicacion.innerHTML=miubicacion;
}
window.addEventListener("load", comenzar, false);