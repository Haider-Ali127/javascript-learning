// global vardeclare outside any function or block are  global. they can accessed anywhere in code;
let globalvar = "I am global variable";

function showglobal() {
    let globalvar = "HAIDER";
    console.log(globalvar);
}
showglobal();
console.log(globalvar);

// function scope
//Variables declared with var inside a function are scoped to that function.They cannot be accessed outside the function.

function myfunction() {
    var functionvar = "var inside the function";
    console.log(functionvar)
}
myfunction();
// console.log(functionvar); not accesseble outside.

//Block Scope
//Variables declared with let or const are block-scoped.They are only accessible inside { } (if, for, while, etc)

if (true) {
    let blockvar = " block scoped";
    console.log(blockvar);
}

//console.log(blockvar); not accesseble outside.

for (let i = 0; i < 3; i++) {
    console.log("INside loop: ", i)
}
console.log("outisde loop: ", i);

for (var i = 0; i < 3; i++) {
    console.log("INside loop: ", i)
}
console.log("outisde loop: ", i);
