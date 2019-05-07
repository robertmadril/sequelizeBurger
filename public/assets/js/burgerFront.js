


$(function () {

    $("#burger-gif").attr("src", "/assets/images/burger.gif");

    setTimeout(function(){
        $("#burger-gif").attr("src", "/assets/images/burger.jpg");
    }, 3400);
    
    $(".eat-da-burger").on("click", function (event) {
        var id = $(this).data("id");
        var isDevoured = $(this).data("devoured");


        var newEatState = {
            devoured: isDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("changed eat state to", newEatState);
                // Reload the page to get the updated list
                location.reload();

            }
        );
    });

    $(".add-da-burger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burger/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});