// simple arrow function
const haider = () => console.log("Hello Haider");
haider();

// arrow function using parameters 
const result3 = x => x * x * x; // cube find
console.log(result3(3));

// object return 
const user = () => ({ name: "Haider", age: 19 });
console.log(user());

// arrows function in map 
let arr = [1, 2, 3, 4, 5, 6]; // double each single value of array
const doubled = arr.map(n => n * 2);
console.log(doubled);

let evens = arr.filter(n => n % n === 0);
console.log(evens);

let odd = arr.filter(n => n % 2 === 1);
console.log(odd);

// arrow func dont have theri own this
const person = {
    name: "Haider Ali",
    normalfunc: function () {
        console.log(this.name)
    }
}
person.normalfunc();

//-----------1 hour arrow fun practise question----------------------//
// SIMPLE FUNCTION
function square1(num) {
    return num * num;
}
console.log(square1(5))

// now convert in arrow function
const square2 = x => x * x;
console.log(square2(5));
