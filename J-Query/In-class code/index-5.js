// for learning class management 
// addClass()
// removeClass()
// toggleClass()

$(document).ready(function(){
    $("#file5 h1").addClass("abc");
    $("#file5 h1").addClass("xyz");

    let beforeClass = $("#file5 h1").attr("class");
    console.log(beforeClass);

    $("#file5 h1").removeClass("xyz");
    let afterClass = $("#file5 h1").attr("class");
    console.log(afterClass);

    $("#file5").click(function(){
        $("#file5 h1").toggleClass("xyz");
        console.log($("#file5 h1").attr("class"));

        $("#file5 span").toggleClass("hide");
    })
})