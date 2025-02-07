// for learning the selectors in jquery 

$(document).ready(function(){
    let cont = $("#cont");
    let p1 = $(".p1");
    let p = $("p");
    let first = $("p:first");
    let last = $("p:last");
    let gt3 = $("p:gt(3)");
    let eq3 = $("p:eq(3)");

    // gte and lte does not exist but we can develop it 
    let gte3 = $("p:gt(3), p:eq(3)");
    let even = $("p:even");
    let odd = $("p:odd");

    console.table([cont, p1, p, first, last, gt3, eq3, gte3,even, odd]);
})