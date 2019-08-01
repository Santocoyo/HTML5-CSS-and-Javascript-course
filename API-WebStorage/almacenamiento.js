function comenzar(){
    var boton=document.getElementById("grabar").addEventListener("click", item_nuevo, false);
}
function item_nuevo(){
    var clave = document.getElementById("clave").value;
    var valor = document.getElementById("valor").value;
    localStorage.setItem(clave, valor);
    //localStorage[clave]=valor;
    leer_mostrar(clave);
    document.getElementById("clave").value="";
    document.getElementById("valor").value="";
}
function leer_mostrar(clave){
    var zonaDatos = document.getElementById("zonaDatos");
    zonaDatos.innerHTML='<div><button onclick="eliminarTodo()">Eliminar todo</button></div>';
    //var elValor = localStorage[clave];
    //zonaDatos.innerHTML="";
    for(i=1; i<localStorage.length;i++){
        var clave = localStorage.key(i);
        var elValor = localStorage.getItem(clave);
        zonaDatos.innerHTML+="<div>Clave: " + clave +"--" + "Valor: " + elValor + "<br><button onclick='eliminarItem(\"" + clave + "\")'>Eliminar</button></div>";
    }
}
function eliminarTodo(){
    if(confirm("¿Estas seguro de eliminar todo?")){
        localStorage.clear();
        leer_mostrar();
    }
}
function eliminarItem(clave){
    if(confirm("¿Estás seguro de eliminar este item?")){
        localStorage.removeItem(clave);
        leer_mostrar();
    }
}
window.addEventListener("load", comenzar, false);
