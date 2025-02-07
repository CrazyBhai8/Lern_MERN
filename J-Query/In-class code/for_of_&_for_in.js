// for of loop : used for array tranverse.
let arr = [1,2,3,4,[10, 20, 30]];
for(let i=0;i<arr.length;i++){
    console.log(`Printing from 1st ${arr[i]}`);
}

for(let element of arr){
    console.log(`Printing from 2nd ${element}`);
}

let obj = {
    name : "Kashish bansal",
    roll : 23,
    course : "Btech"
}
// obj["course"]
// obj.course

// for in  : used for object only 
// name ---> Kashish bansal
for(let key in obj){
    console.log(key, "----->", obj[key]);
    console.log(`${key} -----> ${obj[key]}`);
    console.log(`${key} -----> ${obj[key]}`);

    // Do not use .operator in object unless exact key name is not known
    console.log(`${key} -----> ${obj.key}`);

    // normally obj[key] and obj.key is same when key name is properly given
    // but here it is not given clearly as in general key is used
}
