//practise
// let mix = [10, "Hello", true, [1, 2], {name: "Ali"}];
// mix.push(20) //add item at the end of the list
// // mix.pop()  //remove item end of the list
// mix.shift() // removes first item
// mix.unshift("haider") // add item at the start
// console.log(mix[0]);
// let newmix = mix.slice(1, 3); // copies index 1 to 2
// mix.includes(newmix);
//mix.splice(1, 2)
//mix.slice(1,3)


// QUESTION NO.1 TASK 4
// let fruits = ["mango", "apple", "banana", "guava", "peach"]
// fruits.push("apricot");
// fruits.shift(0);
// let index = fruits.indexOf("mango");
// console.log(index);
// console.log("Final Fruits List:" + fruits);


// QUESTION NO.2 TASK 4
// let array = [7,2,56,5,11,6,15,18];
// for(let i= 0; i< array.length; i++) {
//     if(array[i] > 10) {
//         console.log(array[i]);
//     }
// }

// MY OWN PRACTISE

// let array = [];
// let user;

// while(true) {
//     user = window.prompt("enter furits(q to quit):").toLowerCase();
//     if(user === "q") {
//         break;
//     } 
//     else {
//         array.push(user);
//     }
// }
// console.log(array);

// let array = [];
// let user;

// for (true;;) {   
//   user = window.prompt("Enter fruit (q to quit):");
//   if (user === "q") {
//     break;
//   } else {
//     array.push(user);
//   }
// }

// console.log(array);

// let array = [];
// let user;

// do{
//     user = window.prompt("Enter fruits: (q to quit)");
//     if(user === "q") {
//         break;
//     } else {
//     array.push(user);
//     console.log(array);
//     }
// } while (true);
// console.log("final array :", array);


// let array = [22, 5, 11, 99, 3, 77];
// let smallest  = array[0];

// for(let i=1; i < array.length; i++) {
//     if(array[i] <  smallest) { 
//         smallest = array[i];
//     } 
// }
// console.log("smallest:", + smallest);

// let arr = [10, 15, 20, 25, 30, 35];
// let even = 0;
// let odd = 0;
// for(let i=0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) {
//         even++;
//     } else {
//         odd++;
//     }
// } 
// console.log("Even:", even);
// console.log("odd:", odd);

//  let arr = [2, 3, 2, 5, 3, 7, 8, 7];
// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!unique.includes(arr[i])) {
//     unique.push(arr[i]);
//   }
// }

// console.log("Unique:", unique);

let array = [10, 20, 30, 40];
array.push(250);
// array.splice(1,4)
array.splice(1,3)
array.shift();
array.unshift(40)
console.log(array);
 