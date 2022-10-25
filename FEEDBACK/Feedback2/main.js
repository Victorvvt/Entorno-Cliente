function mostrarPares(){
    let modifiVer = document.querySelectorAll(".impar");
    modifiVer.forEach(function(ver) {
      ver.style.visibility = "hidden";
    });
    let modifiOcultar = document.querySelectorAll(".par");
    modifiOcultar.forEach(function(Ocultar)
     {Ocultar.style.visibility = "visible";
    });
    
}
function mostrarImpares(){
    let modifiVer = document.querySelectorAll(".par");
    modifiVer.forEach(function(ver) {
      ver.style.visibility = "hidden";
    });
    let modifiOcultar = document.querySelectorAll(".impar");
    modifiOcultar.forEach(function(Ocultar) {
      Ocultar.style.visibility = "visible";
    });

    
}

