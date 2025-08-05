// function declaration
function sum(a,b){
    return a * b;
}
let result = sum(10,20);
console.log("sum of 10 and 20 is :", result);

function getdetails(){
    return ["HAIDER", 19, "new york"];
}
let [personName, personAge, personcity] = getdetails();
console.log("person name is :", personName)
console.log("Haider age is :", personAge)
console.log("Haider live in :", personcity)

// fuction expression
const multiply = function(x,y){
    return x * y;
}
console.log(multiply(4,5));


let x = Number(prompt("Enter first number:")); 
let y = Number(prompt("Enter second number:"));
result = x * y;
console.log(result);


// Arrow function
const  multiple = (x,y) => x * y;
console.log( multiple( x, y));

function operate(a, b, callback) {
    return callback(a, b);
} 
function add(x,y){
    return x + y;
} 
function multiply(x,y){
    return x * y;
}
console.log(operate(20, 4, add));
console.log(operate(25, 30, multiply))  

function birthday(username, age){
    console.log(`happy birthday to you ${username}`);
    console.log(`you are ${age} years old`);
}
birthday("Haider", 19);
birthday("ali", 23);
birthday("ismail", 17);
birthday("hassan", 18);



function add(x,y){
    // let result = x + y;
    // return result;
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

function even(number){
    // if(number % 2 === 0){
    //     return "even";
    // } else{
    //     return  "odd";
    // }

    //ortcut of this if else iternary operator
    return number % 2 === 0?  "even" :  "odd"
}


// let answer = add(1000, 99);
// console.log(answer);

console.log(subtract(1000,99)); // another way to assign value to arguments
console.log(subtract(100,10));
console.log(multiply(100,99));
console.log(divide(100,10));
console.log(even(188));
// function expression
sum = function  (a, b){
    return a + b;
}
console.log(sum(10,20));

// arrows function is consise way to write function expression
const hellon = function (){
    console.log("hello");
} 
hellon();

// NOW WITH ARROWS FUNCTION with same output
const hello = (name, age) => {console.log(`Hello my name is ${name}`)
console.log(`My age is ${age}`)};
hello("haider", 19);
    
// function expresson eg print hello after 3 sec
setTimeout(() =>console.log("hello") , 3000);


const numbers = [2,4,6, 13,8,10];
const square = numbers.map((element) => Math.pow(element, 2));
const cube = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) =>accumulator + element );
console.log(square);
console.log(cube);
console.log(evenNums);
console.log(oddNums);
console.log(total);


//  practise question No.1

function greetuser(a,b){
    return a + b;
}
console.log(greetuser(10,20));

// no.2

 let a = Number(prompt("Enter first number:")); 
 let b = Number(prompt("Enter second number:"));
function max(a , b){
     if(a > b){
        return a;
     } else {
        return  b;
     }
}
console.log(max(a, b));

// No.3
const numbers = [2,41,6, 13, 11, 8,10];
const even = numbers.filter((element) =>  element % 2 === 0);

console.log(even);

// NO.4
 const reverse = (text) => text.split("").reverse("").join("");
let word = prompt("Enter an word:");
console.log("Reversed word is: ", reverse(word)); 


// leat code problem solution

let arr = [10, 5, 8, 20, 19];

function secondLargest(arr) {
  let max = arr[0], second = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > second) {
      second = arr[i];
    }
  } return second;
}
console.log(secondLargest(arr)); 



