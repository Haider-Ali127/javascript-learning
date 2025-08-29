// // closure = A function defined inside of another function, 
//                  the inner function has access to the variables 
//                  and scope of the outer function.
//                  Allow for private variables and state maintenance
//                  Used frequently in JS frameworks: React, Vue, Angular

// It returns whole lexical scope of a function not just a scop.
function makefunc() {
    const name = "mozilla"
    return function displayname() {
        console.log(name)
    }
}
const myfunc = makefunc();
myfunc();


// practise e.g of closure

// document.getElementById("orange").onclick = function () {
//     document.body.style.backgroundColor = "orange"
// }
// document.getElementById("green").onclick = function () {
//     document.body.style.backgroundColor = "green"
// }

// easier method through closure
function clickHandler(color) {
    return function () {
        document.body.style.backgroundColor = `${color}`
    }
}
document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");


function outer() {
    let message = "hello"

    function inner() {
        console.log(message)
    }
    inner();
}
outer();

function createcount() {
    let count = 0;

    function incr() {

        count++
        console.log(`count increase to ${count}`);
    }
    function getcount() {
        return count;
    }
    return { incr, getcount }
}

const counter = createcount();
counter.incr();
counter.incr();
counter.incr();
counter.incr();
console.log(`The current count is ${counter.getcount()}`)



function creategame() {
    let score = 0;
    function increase(points) {
        score += points;
        console.log(`+${points}pts`)
    }

    function decrease(points) {
        score -= points;
        console.log(`-${points}pts`)
    }


    function getscore() {
        return score
    }
    return { increase, decrease, getscore }
}
const game = creategame();
game.increase(20);
game.decrease(5);
game.decrease(5);
console.log(`The final score is ${game.getscore()}pts`);