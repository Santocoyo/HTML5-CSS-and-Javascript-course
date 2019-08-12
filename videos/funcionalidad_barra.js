var miVideo, reproducir, barra, progreso, maximo;
maximo=600;
function comenzar(){
    miVideo=document.getElementById("miVideo");
    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    reproducir.addEventListener("click", clicando, false);
    barra.addEventListener("click", adelantando, false);
}

function clicando(){
    if(miVideo.paused==false && miVideo.ended==false){
        miVideo.pause();
        reproducir.innerHTML="Play";
    }
    else{
        miVideo.play();
        reproducir.innerHTML="Pause";
        bucle=setInterval(estado,30);
    }
}

function estado(){
    if(miVideo.ended==false){
        var total=parseInt(miVideo.currentTime*maximo/miVideo.duration);
        progreso.style.width=total+"px";
    }
}

function adelantando(posicion){
    if(miVideo.paused==false && miVideo.ended==false){
        var ratonX=posicion.pageX-barra.offsetLeft;
        var nuevoTiempo=ratonX*miVideo.duration/maximo;
        miVideo.currentTime=nuevoTiempo;
        progreso.style.width=ratonX+"px";
    }
}

window.addEventListener("load", comenzar, false);