var bd;
function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    boton=document.getElementById("grabar").addEventListener("click", agregarobjeto, false);
    var solicitud = indexedDB.open("mibase");
    solicitud.onsuccess=function(e){bd=e.target.result;}
    solicitud.onupgradeneeded=function(e){bd.createObjectStore("gente", {keyPath: "clave"})}
}
window.addEventListener("load", comenzar, false);