// Asych means program works sequentially. and in js asyn works sequesntially but in between you make one funcion and settimeout like 4 sec then other consoles not wait 4 sec it prints itself then your timout func comes in the end.
function one() {
    console.log("10");
}
setTimeout(one, 1000);

function two() {
    console.log("9");
}
setTimeout(two, 2000)

function three() {
    console.log("8")
}
setTimeout(three, 3000)

function four() {
    console.log("7")
}
setTimeout(four, 4000)

function five() {
    console.log("6")
}
setTimeout(five, 5000)
function six() {
    console.log("5")
}
setTimeout(six, 6000)
function seven() {
    console.log("4")
}
setTimeout(seven, 7000)
function eight() {
    console.log("3")
}
setTimeout(eight, 8000)
function nine() {
    console.log("2")
}
setTimeout(nine, 9000)
function ten() {
    console.log("1")
}
setTimeout(ten, 10000)

// using arrow function easy way not wants to make function name then outside set the timout.
setTimeout(() => {
    console.log("Happy Birthday Haider Ali🎂🎂🎂");
}, 11000)
