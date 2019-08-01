var bd;
function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    boton=document.getElementById("grabar").addEventListener("click", agregarobjeto, false);
    var solicitud = indexedDB.open("mibase2");
    solicitud.onsuccess=function(e){bd=e.target.result;}
    solicitud.onupgradeneeded=function(e){
        bd=e.target.result;
        bd.createObjectStore("gente", {keyPath: "clave"})}
}
function agregarobjeto(){
    var clave=document.getElementById("clave").value;
    var titulo=document.getElementById("texto").value;
    var fecha=document.getElementById("fecha").value;
    var transaccion = bd.transaction(["gente"], "readwrite");
    var almacen = transaccion.objectStore("gente");
    var agregar = almacen.add({clave: clave, titulo: titulo, fecha: fecha});
    document.getElementById("clave").value="";
    document.getElementById("texto").value="";
    document.getElementById("fecha").value="";
}
window.addEventListener("load", comenzar, false);
