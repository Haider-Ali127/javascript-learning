
// CALLBACKS IS A FUNCTION PASSED as a ARGUMENT TO ANOTHER FUNCTION.
// IN callbacks you can pass the function as an argument and also passed the complete function its also valid syntax.
// nested callback
let age = 19;
if (age >= 18) {
    if (age >= 60) {
        console.log("Senior")
    } else {
        console.log("middle child");
    }
} else {
    console.log("child")
}


// function sum(a, b) {
//     console.log(a + b);
// }

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}
// complete func passed. if write just sum in place of (a,b) so upper comment func runs.
calculator(6, 6, (a, b) => {
    console.log(a + b)
})

// one more eg of callback
function num() {
    console.log("10")
}
// num callbacks as an argument 
setTimeout(num, 2000)