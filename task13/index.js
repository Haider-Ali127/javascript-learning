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


// //----------QUESTION 2 FIRST HOUR-------------------------//
// // let input = window.prompt("Enter an prime number");
// const isprime = (input) => {
//     if (input <= 1)
//         return false
//     for (let i = 2; i < input; i++) {
//         if (input % i === 0) {
//             return false
//         }
//     }
//     return true;
// }
// // console.log(isprime(input));


// //-------2nd hour Topic ------------//

// // multi-line string

// let poem = `
// Roses are red
// flowers are red
// love is good
// `
// console.log(poem)
// //-------2nd Hour practise question----------------//
// function person2(name, age) {
//     console.log(`My name is ${name} and my age is ${age}`)
// }
// console.log(person2("Haider", 19));

// //-----------3rd Hour started------------------------//
// // array destruction-----
// let arr1 = [2, 3, 4];
// let [a, b, c] = arr1;
// console.log(a);
// console.log(c);
// console.log(b);

// //-----Default values---------------//
// let ar = [7];
// let [num1, num2 = 100] = ar;
// console.log(num1);
// console.log(num2);

// //---------swapping variablesz------------------//
// let h = 1; d = 2;
// [h, d] = [d, h];
// console.log(h);
// console.log(d);

// //-----------SKIPPING ARRAYS----------------//
// let arr4 = [100, 2, 350, 4];
// let [first, , third] = arr4;
// console.log(first); // 1
// console.log(third); // 3


// //---------3rd hour practise question--------------//
// let person1 = { name: "Haider", age: 19, city: "karachi" }
// let { name: age } = person1;
// let { age: name } = person1;
// console.log(`my age is ${age}`);
// console.log(`my name is ${name}`);

// //------ HOUR 4 ---------------------//
// // ------------spread rest operators--------//
// // expanding arrays
// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let combined = [...arr5, ...arr6];
// console.log(combined);

// //spreading object to add pass new value and spread in array
// let pers = { name: "Haider", age: 19 };
// let updated = { ...pers, city: "karachi" };
// console.log(updated);

// // Rest operators--------
// let [first1, second, ...rest] = [10, 2, 30, 40, 50, 60];
// console.log(first1);
// console.log(second);
// console.log(rest);

// // rest with object destruction
// let obj = { id: 1, name: "haider", city: "karachi", age: 19 }
// let { id, ...details } = obj;
// console.log(`My id is ${id}`);
// console.log(details);


// //----- 4hours practise question------------------//
// let arr7 = [10, 20, 30]
// let arr8 = [40, 50, 60]
// let spread = [...arr7, ...arr8]
// console.log(spread);

// //-------Second question-----------//

// const sum = (...nums) => {
//     return nums.reduce((addall, n) => addall + n);

// }
// console.log(sum(10, 20, 30, 40, 50));

//--------LEET CODE QUESTION-------------//
function sum(num, target) {
    for (let i = 0; i < num.length; i++) {
        for (let j = 1; j < num.length; j++) {
            if (num[i] + num[j] === target) {
                return [i, j]
            }
        }
    }
}
console.log(sum([1, 2, 3, 4, 5, 6], 11));

