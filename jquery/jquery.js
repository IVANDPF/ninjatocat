// Una alternativa de solución utilizando la propiedad opacity de css.

$(document).ready(function() {
    $("img").click(function() {

        var opacidad = $(this).css("opacity");

        if (opacidad == 1) {

            $(this).css("opacity", 0);

        } else {
            $(this).css("opacity", 1);
        }
        console.log(opacidad);


    });
});

// Nota: Se puede implementar otra solución utizando los atributos personalizados de los tags, pero se tendría que modificar el archivo HTML trabajado por el otro grupo