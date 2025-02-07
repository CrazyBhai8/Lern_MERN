// for learning mouse events and keyboard events 

$(document).ready(function(){
    // Giving 1 css property only
    $("#input").css("width" , "250px");
    $("#input").css("height" , "250px");
    $("#input").css("background-color" , "red");
    
    // givng many css property together
    $("#output").css({"width": "250px", "height" : "250px", "background-color": "purple"});

    // mouse events : click
    $("#input").click(function() {
        $("#output").text("Click event is here")
        $("#output").css("color" , "white").css("background-color", "green")
    })

    // mouse events : dblclick
    $("#input").dblclick(function() {
        $("#output").html("<h1>Double Click event is here<h1/>").css("color", "white");
    })

    // mouse events : mouseenter
    $("#input").mouseenter(function() {
        $("#output").html("<h1>I have entered the div<h1/>").css("color", "white");
    })

    // mouse events : mouseleave
    $("#input").mouseleave(function() {
        $("#output").html("<h1>I have left the div<h1/>").css("color", "white");
    })

    if($("#mytitle").val()==="")
        $("#display").text("Nothing to display. Enter something")

    // keyboard event : keyup
    $("#mytitle").keyup(function() {
        let enteredText = $(this).val();
        $("#display").text(enteredText);

        if($("#mytitle").val()==="")
            $("#display").text("Nothing to display. Enter something")
    })
})