function animar(){
    //.toggle() lo que hace es quita o eliminar clases de CSS o bootstrap
    document.getElementById("barrita").classList.toggle("progress-bar-animated");
}

document.getElementById("boton").onclick = function (){
    animar();
}