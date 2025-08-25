// test scoping rules

let glob = "global";
function test() {
    let local = "local"
    console.log("outside fun: ", glob);
    console.log("outside fun: ", local);
}
console.log(glob);
// console.log(local);

if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
}
// works with var not let and const
console.log("x =", x);
// console.log("y =", y);
// console.log("z =", z);

for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);

// not work if change let with var it works
for (var j = 0; j < 3; j++) {
    console.log(j);
}
console.log(j);


let a = "Global A";

function outer() {
    let b = "Outer B";

    function inner() {
        let c = "Inner C";
        console.log("From inner:", a, b, c);
        console.log("From inner:", c);
    }

    inner();
    console.log(c)
    console.log("From outer:", a, b, c);
    // comes error c is not inner not accessible outside
    console.log("From outer:", c)
}

outer();