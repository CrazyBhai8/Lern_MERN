// learning about adding something in the html page 

$(document).ready(function (){
    $("button:eq(0)").click(function(){
        $("div ol").prepend("<li>New Item Added at the First</li>");
    })

    $("button:eq(1)").click(function(){
        $("div ol").append("<li>New Item Added at the last</li>");
    })

    $("button:eq(2)").click(function(){
        $("div ol").before("<h1>Before operation</h1>");
    })

    $("button:eq(3)").click(function(){
        $("div ol").after("<h1>After operation</h1>");
    })

    $("button:eq(4)").click(function(){
        $("li").empty();
    })

    $("button:eq(5)").click(function(){
        $("ol").remove();
    })
})