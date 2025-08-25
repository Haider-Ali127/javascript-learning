// HOisting 
// fully safe with function allow to call before decleration with others like let var const it is not accsesseble.
function name() {
    var a = "Haider";
    console.log(a);
}

name();
// console.log(a); not accsesseble
//var hoisted but undefined;;
console.log(b)
var b = 10;
console.log(b)


// Function decleration hopisted
sayHello();

function sayHello() {
    console.log("Haider Ali");
}

// function expression not hoisted 
sayHi();

var sayHi = function () {  // In expression way
    console.log("Hello");
}

console.log(a)
console.log(b)
console.log(c)

var a = 11;
let b = 10;
const c = 10;

sayHello();
sayHi();

function sayHello() {
    console.log("Hello Haider");
}
// not hoisting func expression 
var sayHi = function () {
    console.log("Hi");
};