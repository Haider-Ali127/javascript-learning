// --------Practical task--------------

let global = " i am global";

function test() {
    let local = "i am local";
    console.log(global);
    console.log(local);
}

test();
console.log(global);
// console.log(local); error undefined because you are trying to access a variable inside the function outside the scope. if you want to access it you want to invoke inside the scope of your function.



