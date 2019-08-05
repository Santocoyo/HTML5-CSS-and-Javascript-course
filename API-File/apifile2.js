function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    var boton=document.getElementById("boton");
    boton.addEventListener("click", modificar, false);
    navigator.webkitPersistentStorage.requestQuota(5*1024*1024, acceso);
}
function acceso(){
    window.webkitRequestFileSystem(PERSISTENT, 5*1024*1024, crearsis, errores);
}
function crearsis(sistema){
    espacio=sistema.root;
    ruta="";
    mostrar();
}
/*function modificar(){
    var origen = document.getElementById("archivo_origen").value;
    var destino = document.getElementById("directorio_destino").value
    espacio.getFile(origen, null, function(archivo){
        espacio.getDirectory(destino, null, function(directorio){
            archivo.moveTo(directorio, null, exito, errores);
        }, errores);
    }, errores);
}*/
function modificar(){
    var origen = document.getElementById("archivo_origen").value;
    origen=ruta+origen;
    espacio.getFile(origen, null, function(archivo){
        archivo.remove(exito, errores);
    }, errores);
    mostrar();
}
function exito(){
    document.getElementById("archivo_origen").value="";
    document.getElementById("directorio_destino").value="";
    mostrar();
}
function mostrar(){
    document.getElementById("archivo_origen").value="";
    zonadatos.innerHTML="";
    espacio.getDirectory(ruta, null, leerdir, errores);
}
function leerdir(dir){
    lector=dir.createReader();
    leer();
}
function leer(){
    lector.readEntries(function(archivos){
        if(archivos.length){
            listar(archivos);
        }
    }, errores);
}
function listar(archivos){
    for(var i=0; i<archivos.length;i++){
        if(archivos[i].isFile){
            zonadatos.innerHTML+=archivos[i].name+"<br>";
        }else if(archivos[i].isDirectory){
            zonadatos.innerHTML+="<span class='directorio'>" + archvios[i].name + "</span><br>";
        }
    }
}
function errores(e){
    alert("Ha habido un error: " + e.code);
}
function volver(){
    espacio.getDirectory(ruta, null, function(dir_actual){
        dir_actual.getParent(function(dir_padre){
            ruta=dir_padre.fullPath;
            mostrar();
        }, errores);
    }, errores);
}
window.addEventListener("load", comenzar, false);