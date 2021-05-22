var tiempo_espera = 500;
var secciones = 5;
var continua = false;
var prefijo_imagen = 'ninja';
var prefijo_contenedor = 'box';
var prefijo_imagen_alt = 'cat';

$(document).ready(function() {
    $("img").click(function() {
        var temporal = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", temporal);
    });

    $("#una_animacion").click(function() {
        tiempo_espera = $("#intervalo").val();
        for (var i = 0; i < secciones; i++) {
            setTimeout(cambio, i*tiempo_espera, i);
        }
    });
});

function cambio(i) {
    var temporal = $("#box" + i).attr("src");
    $("#box" + i).attr("src", $("#box" + i).attr("data-alt-src"));
    $("#box" + i).attr("data-alt-src", temporal);
    if (continua){
        tiempo_espera = $("#intervalo").val();    
        setTimeout(cambio, tiempo_espera, (i+1)%secciones);
    }
}

function iniciar_animacion(){
    continua = true;
    tiempo_espera = $("#intervalo").val();
    setTimeout(cambio, tiempo_espera, 0);
}

function detener_animacion() {
    continua = false;
}

function reiniciar() {
    tiempo_espera = 1;
    continua = false;
    for (var i = 0; i < secciones; i++) {
        $("#" + prefijo_contenedor + i).attr("src","img/" + prefijo_imagen + i + ".png");
        $("#" + prefijo_contenedor + i).attr("data-alt-src", "img/" + prefijo_imagen_alt + i + ".png");
    }
}

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("reloj").innerHTML = t;
}
