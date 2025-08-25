// last problems no.1
for (var i = 0; i < 5; i++) {
    console.log(i);
}
for (let j = 0; i < 5; i++) {
    console.log(i);
}
for (const c = 0; i < 5; i++) {
    console.log(i);
}
console.log(i) // runs only with var
console.log(j) //using let giving error
console.log(c) //using const giving error

// no.2
let global = 20;

function local() {
    let Local = 40;
    console.log(global + Local)
}
local();

// question.3
// it is undefined means it is exist but undefined not give error
console.log(a)
var a = 10

// let is also hoisted, but you cannot access before initialization it throws an error
console.log(b)
let b = 10
// same thing using const throws an error crash your program
console.log(h)
const h = "haider"


// this func will safely run not matter you trying to access befor func decleration 
test();
function test() {
    console.log("Hello")
}
