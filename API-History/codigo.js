window.addEventListener("load", comenzar, false);
function comenzar(){
    zonadatos = document.getElementById("zonadatos");
    url = document.getElementById("url").addEventListener("click", cambia_url, false);
    window.addEventListener("popstate", nuevaurl, false);
    window.history.replaceState(1, null);
}
function cambia_url(){
    //zonadatos.innerHTML = "Estas en la página 2";
    //window.history.pushState(null, null, "pagina2.html");
    mostrar(2);
    window.history.pushState(2, null, "pagina2.html");
}
function nuevaurl(e){
    mostrar(e.state);
}
function mostrar(actual){
    zonadatos.innerHTML = "Estas en la página " + actual;
}