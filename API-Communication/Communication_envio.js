function comenzar(){
    zoandatos = document.getElementById("zonadatos");
    var boton = document.getElementById("archivos").addEventListener("change", subir_archivos, false);
}
function subir_archivos(e){
    var archivos = e.target.files;
    var archivo = archivos[0];
    var url = "procesar.php";
    var solicitud = new XMLHttpRequest();
    var subida = solicitud.upload;
    subida.addEventListener("loadstart", comienza_barra, false);
    subida.addEventListener("progress", estado_barra, false);
    subida.addEventListener("load", mostrar, false);
    solicitud.open("POST", url, true);
    var datos = new FormData();
    datos.append("archivo", archivo);
    solicitud.send(datos);
}
function comienza_barra(){
    zoandatos.innerHTML = "<progress value='0' max='100'></progress>";
}
function estado_barra(e){
    var porcentaje = parseInt(e.loaded/e.total*100);
    var barraprogreso = zoandatos.querySelector("progress");
    barraprogreso.value=porcentaje;
    zonaprogreso.innerHTML=porcentaje + " %";
}
function mostrar(e){
    zoandatos.innerHTML = "¡Terminado!";
}
window.addEventListener("load", comenzar, false);
