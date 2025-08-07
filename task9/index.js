// // --------------PRACTISE OF ARRAYMETHODS


// arr = ["haider", "hassan", "Ali", "ismail", "Rubab Aqeel"];
// // arr.push("hussain");
// // arr.shift();
// // arr.unshift("qasim");
// // arr.pop();
//let  arr =  [46, 20, 32, 50]
//arr.splice(2, 3, 1,2)  // syntax of splics .splice(start,deletecount, additem1, item2....)
//console.log(arr);
// // arr.slice(0,3);
// console.log(arr);

// array = ["mango", "apple", "coconut", "anwardetol","banana"];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     console.log("\n");
//     // array.sort().reverse();  to reverse your array
// }
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
//     console.log("\n");
// }

// let length = array.length;
// console.log(length);
// array[4] = "sindhri Mango";
// array[5] = "Chaunsa Mango";
// console.log(array)

// let num = array.length;
// let index = array.indexOf("apple");
// console.log(index)
// console.log(num)
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// let fruits = array.sort().reverse();
// console.log(array)

//--------HIGHER ORDER METHODS IN ARRAY------------//
// first .map METHOD
// value for array data, index for indexing.NO with data, array for whole array in output with each indexing 

// let  arr =  [46, 20, 32, 50]
//  const a = arr.map((value, index) => {
//     console.log(value, index);
//     return value / 2
//})
// console.log(a);
// to divide array  values
// for(let i = 0; i < arr.length; i++){
//     arr[i] /= 2;
//     console.log(arr[i])
// }
 
// NOW .FILTER METHOD
// let  arr2 =  [46, 20, 0, 5 , 32, 50];

// let a2 = arr2.filter((a) =>{
//     return  a > 49
// })
// console.log(a2);

// filter method even odd
// let arr3 = [1, 2, 3, 6, 4, ,1];
// const a3 = arr3.reduce((a1, a2) =>{
//     return a1 + a2
// })
// console.log(a3);


// let num = [2, 3, 5, 9, 8, 4, 6]

// const arr2 = num.filter((a) =>{
//     return a % 2 === 0
// })
// const arr = num.filter((a) =>{
//     return a % 2 !== 0
// })
// console.log(arr2);
// console.log(arr);



// NOW REDUCE METHOD 
// let arr3 = [1, 2, 3, 6, 4, ,1];
// const reduce_func = (h1, h2) =>{
//     return h1 + h2
// }
// let arr = arr3.reduce( reduce_func)
// console.log(arr);

// let arr = [1, 2, 3, 6, 4, ,1];
// const arr2 = arr.reduce((h1, h2)=>{
//    return  h1 * h2;
// })
// console.log(arr2);



// NOW FOR EACH METHOD 
// let arr = [1, 2, 4, 6, 8, ,10];
// arr.forEach(function(num) {
//     console.log(num + 3);
// })
// console.log(arr);


//problem 1  practise question of task 9 -----------------

// let nums = [1,2,3,4,5];
// const arr = nums.map((value)=>{
//     return value * 2;
// })
// console.log(arr);

// problem no.2
//   let data = [
//     {name : "vickey bhai", score : 90},
//     {name : "jaffar ramay", score : 92},
//     {name : "Haider ali", score : 50},
//     {name : "ali", score : 55},
//     {name : "adnan", score : 50},
//     {name : "imran", score : 58},
// ]
// let names = data[0].name
// let highest = data[0].score
// for(let i = 0; i < data.length; i++){
//     if(data[i].score > highest){
//         highest = data[i].score
//         name = data[i].name

//     }
// }
// console.log(`${name} you got highest marks`, highest);

// problem no.3
 
// const word = "hello world"
// let output = word.split(" ").map(word=>{
//     return word[0].toUpperCase() + word.slice(1);
// }).join("  ");
// console.log(output);

// Problem No.4 LEETCODE
function special(str){
    for(let i = 0; i < str.length; i++){
        let isunique = true;

        for(let j=0; j < str.length; j++){
            if(i !== j && str[i] === str[j] ){
                isunique = false;
            }
        }

    if(isunique){
        return i;
    }   
}
    return -1
}
console.log(special("loveleetcode"));