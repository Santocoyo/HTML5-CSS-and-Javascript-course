function empezar(){

    zonadatos=document.getElementById("zonadatos");
   
    var creando=document.getElementById("crear");
    creando.addEventListener("click",crear,false);
   
    var eliminando=document.getElementById("eliminar");
    eliminando.addEventListener("click",eliminar,false);
   
    var moviendo=document.getElementById("mover");
    moviendo.addEventListener("click",mover,false);
   
    var copiando=document.getElementById("copiar");
    copiando.addEventListener("click",copiar,false);
    
    navigator.webkitPersistentStorage.requestQuota(5*1024*1024, acceso); // Esto es para 5 megas. 
   }
   
   
   function acceso(){
   
    window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,crearsys,errores);
   }
   
   
   function crearsys(sistema){
   
    espacio=sistema.root; // Sistema es el objeto que genera crearsys; espacio va a ser la raiz del sma.archivos. 
    
    ruta="";
    
    mostrar();
   }
   
   
   function crear(){
   
    var nom_archivo = document.getElementById("nom_fichero").value;
    
    if (nom_archivo != ""){
     
     nom_archivo = ruta + nom_archivo;
    
     espacio.getFile(nom_archivo, {create:true, exclusive:false}, null, errores);
     
     var nom_direc = document.getElementById("nom_directorio").value;
     
     if (nom_direc != ""){
      
      nom_direc = ruta + nom_direc;
      
      espacio.getDirectory(nom_direc, {create:true, exclusive:false}, mostrar, errores);
     }
     
     else{
      
      mostrar(); 
     }
    }
    
    else{
    
     var nom_direc = document.getElementById("nom_directorio").value;
     
     if (nom_direc != ""){
      
      nom_direc = ruta + nom_direc;
      
      espacio.getDirectory(nom_direc, {create:true, exclusive:false}, mostrar, errores);
      
     }
     
     else{
     
      alert("Error, para crear debes de introducir un archivo o un directorio al menos...."); 
     }
    }
    
   }
   
   
   function mostrar(entrada){
    
    document.getElementById("nom_fichero").value="";
    
    document.getElementById("nom_directorio").value="";
    
    zonadatos.innerHTML="";
    
    if(ruta=="/"){
    
     ruta=""; 
    }
    else{
     
     if(ruta.charAt(0)=="/"){
     
      ruta=ruta.substr(1,ruta.length-1); 
     }
    }
    
    
    //alert("Mostrando datos, la ruta es: "+ruta)
    
    espacio.getDirectory(ruta, null, leerdir, errores); // Null sustituye a {create:true, exclusive:false}
   }
   
   
   function leerdir(dir){
   
    lector=dir.createReader();
    
    leer(); 
   }
   
   
   function leer(){
   
    lector.readEntries(function(archivos){if(archivos.length){listar(archivos);}},errores); 
   }
   
   
   function listar(archivos){
   
    for(var i=0;i<archivos.length;i++){
    
     if(archivos[i].isFile){
      
      zonadatos.innerHTML+=archivos[i].name+"<br>";
     }  
     else if(archivos[i].isDirectory){
      //zonadatos.innerHTML+="<span class='directorio'>" + archivos[i].name + "</span><br>";
      zonadatos.innerHTML += "<span onclick='cambiardir(\"" + archivos[i].name + "\")' class='directorio'>" + archivos[i].name + "</span><br>";   
     } 
    }
   }
   
   
   function cambiardir(nuevaruta){
    ruta = ruta + nuevaruta +"/";
    mostrar();
    
   }
   
   
   function volver(){
   
    espacio.getDirectory(ruta, null, function (dir_actual){dir_actual.getParent(function(dir_padre){ruta=dir_padre.fullPath;mostrar();},errores);},errores);
   }
   
   
   function eliminar(){
    
    var orific = document.getElementById("nom_fichero").value;
   
    oridir = document.getElementById("nom_directorio").value;
    
    if(orific == "" && oridir ==""){
     
     alert("¡¡¡¡Error!!!!, debes de introducir un fichero/directorio a eliminar....")
    }
    else{
    
     if (orific != ""){
   
      orific = ruta+orific;
      
      espacio.getFile(orific, null, function(archivo){archivo.remove(exito,errores);},errores);
     }
     
    
    
     if (oridir != ""){
    
      oridir = ruta+oridir;
      
      espacio.getDirectory(oridir, null, validarborrado, errores);
     } 
    
    }
   
   }  
   
   
   function validarborrado(dir){
    
    lector=dir.createReader();
    
    lector.readEntries
       (function(archivos){
     if(archivos.length){
           if (confirm("El directorio contiene archivos. Si aún así deseas borrarlo, pulsa ACEPTAR")){
          espacio.getDirectory(oridir,null,function(archivo){archivo.removeRecursively(exito,errores);},errores);
     }
        }
     else{espacio.getDirectory(oridir, null, function(archivo){archivo.remove(exito,errores);},errores);
     }
       }
       ,errores); 
   }
   
   function mover(){
   
    var origen = document.getElementById("nom_fichero").value;
   
    var destino = document.getElementById("nom_directorio").value;
    
    if(origen == ""){
   
     alert("¡¡¡ERROR!!!, debes de introducir un nombre de fichero origen por favor....");  
    }
    else{
    
     espacio.getFile(origen, null, function(archivo)
      {espacio.getDirectory(destino,null,function(directorio){
       archivo.moveTo(directorio,null,exito,errores);
       },errores);
      }, errores);   
    }
   }
   
   
   function copiar(){
   
    var origen = document.getElementById("nom_fichero").value;
   
    var destino = document.getElementById("nom_directorio").value;
    
    if(origen == ""){
   
     alert("¡¡¡ERROR!!!, debes de introducir un nombre de fichero origen por favor....");  
    }
    else{
    
     espacio.getFile(origen, null, function(archivo)
      {espacio.getDirectory(destino,null,function(directorio){
       archivo.copyTo(directorio,null,exito,errores);
       },errores);
      }, errores);   
    }
   }
   
   
   function exito(){
   
    document.getElementById("nom_fichero").value=""; 
    document.getElementById("nom_directorio").value="";  
    mostrar();
   }
   
   
   function errores(e){
   
    if(e.code==8){
     alert("¡¡¡ERROR!!!, fichero/directorio a gestionar es inexistente, verifica por favor.....");  
    }
    else{
     alert("Ha habido un error: " + e.code);  
    }
    
   }
   
   
   window.addEventListener("load",empezar,false);