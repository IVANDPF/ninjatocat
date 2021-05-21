$(document).ready(function() {
    $("img").click(function() {

        var temporal = $(this).attr("src");

        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", temporal);


    });
});


// $(document).ready(function() {


//     function cambio(i) {
//         var temporal = $("#box" + i).attr("src");
//         $("#box" + i).attr("src", $("#box" + i).attr("data-alt-src"));
//         $("#box" + i).attr("data-alt-src", temporal);
//         console.log(i + " " + new Date().toLocaleString());

//     }

//     $("button").click(function() {
//         for (var i = 0; i < 5; i++) {

//             var interval = setInterval(cambio(i), (i + 1) * 1000);

//         }

//     });

// });