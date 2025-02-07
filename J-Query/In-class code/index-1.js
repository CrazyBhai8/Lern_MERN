// for learning the concept of array and object of selected item 

$(document).ready(function() {
    let p = $("#cont p");
    console.log(p);
    // it is array as well as object at same time. 
    // Always take it as array for better functioning 

    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==")
    // if you take p as array, you will get array of all p
    for(let i=0;i<p.length;i++){
        console.log(p[i]);
    }

    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==")
    for(let element of p){
        console.log(element);
    }

    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==")
    // if you take p as object, you get 
    for(let key in p) {
        console.log(key)
    }
})