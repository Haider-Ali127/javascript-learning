// leetcode question
function outer() {
    let counter = 0;
    function increase() {
        counter++
        return counter
    }
    function decrease() {
        counter--
        return counter
    }
    return { increase, decrease }
}
let counter = outer();
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());


// qustion no.2
function multiplyBy(n) {
    return function (x) {
        return n * x;
    };
}
const first = multiplyBy(2);
console.log(first(5));

const second = multiplyBy(5);
console.log(second(10));



// leet code last question

function outer() {
    let counter = 0;
    function increase() {
        counter++
        return counter
    }
    return { increase }
}
let counter1 = outer();
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.increase());