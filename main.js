$(document).ready(function() {
    console.log("Hello");

    $("#header").append("<h1>Something Special</h1>");

    $("button").on("click", function() {
        alert("You clicked my buttons");
    })
});

