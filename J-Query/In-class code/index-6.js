// learning about fading effects 
// fadeIn()
// fadeOut()
// fadeToggle()

$(document).ready(function(){

    $("#file6 button:eq(0)").click(function(){
        $("#file6 div").fadeIn(3000);
    })

    $("#file6 button:eq(1)").click(function(){
        $("#file6 div").fadeOut(3000);
    })

    $("#file6 button:eq(2)").click(function(){
        $("#file6 div").fadeToggle(3000);
    })

    $("#file6 button:eq(3)").click(function(){
        $("#file6 div").fadeTo(3000, 0.5);
    })


})