function comenzar(){
    var boton=document.getElementById("grabar").addEventListener("click", item_nuevo, false);
}
function item_nuevo(){
    var clave = document.getElementById("clave").value;
    var valor = document.getElementById("valor").value;
    sessionStorage.setItem(clave, valor);
    //sessionStorage[clave]=valor;
    leer_mostrar(clave);
    document.getElementById("clave").value="";
    document.getElementById("valor").value="";
}
function leer_mostrar(clave){
    var zonaDatos = document.getElementById("zonaDatos");
    zonaDatos.innerHTML='<div><button onclick="eliminarTodo()">Eliminar todo</button></div>';
    //var elValor = sessionStorage[clave];
    //zonaDatos.innerHTML="";
    for(i=1; i<sessionStorage.length;i++){
        var clave = sessionStorage.key(i);
        var elValor = sessionStorage.getItem(clave);
        zonaDatos.innerHTML+="<div>Clave: " + clave +"--" + "Valor: " + elValor + "<br><button onclick='eliminarItem(\"" + clave + "\")'>Eliminar</button></div>";
    }
}
function eliminarTodo(){
    if(confirm("¿Estas seguro de eliminar todo?")){
        sessionStorage.clear();
        leer_mostrar();
    }
}
function eliminarItem(clave){
    if(confirm("¿Estás seguro de eliminar este item?")){
        sessionStorage.removeItem(clave);
        leer_mostrar();
    }
}
window.addEventListener("load", comenzar, false);
