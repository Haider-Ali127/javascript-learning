// // // QUESTION 1 for practise
// // const car = {
// //     name: "civic",
// //     id: 78,
// //     model: 2020,
// //     cc: 1600,
    
// // }
// // for (let key in car) {
// //   console.log(key, car[key]);
// // } 
// // // Acess, update, add, delete object property
// // car.name = "grande";  // to update str
// // car["model"] = 2022; // to update integer
// // car.color = "blue",  // to add new property in your object
// // delete car.id;   // to delet any property from your object
// // console.log(car);

// // // QUESTION 2 for practise
// // const user = {
// //    name:"haider",
// //    address:{
// //     city: "karachi",
// //     area:"defence phase 7",
// //     flatno: "A14",

// //    }
// //   }
// // console.log("Haider Ali address: ")
// // console.log(user.address.area + (" lane no.16 Bukhari commercial"));  
// // console.log(("flat.no ") + user.address.flatno);
// // console.log(user.address.city);// "Karachi"

// // // QUESTION 3 FOR PRACTISE

// // const fruits = {
// //     name: "fruits",
// //     Array : ["banana", "apple", "mango"],
// // }
// //  fruits.Array.push("peach"); // to add data at last in the array
// //  fruits.Array.shift();  // to delete first data in array
// //  fruits.Array.unshift("guava,kiwi"); // add data in first in the array.
// // console.log(fruits.Array);

// // // QUESTION 4 FOR PRACTISE
// //  const person = {
// //   username: "haider123",
// //   email: "haider@example.com",
// //   isActive: true
 
// // };
// // console.log( person);

// // // lead code question solution

// function charfrequency(str) {
//      const frecounter = {};
//      for(let char of str){
//         if(frecounter[char]) {
//          frecounter[char] +=1;   
//         }  
//         else {
//             frecounter[ char] = 1;
//         }
//      }
//      return frecounter;
//     }     
// console.log(charfrequency("Hider Hassan Adnan"));

 
// // function wordFrequency(str) {
// //   const freqCounter = {};
// //   const words = str.split(" ");

// //   for (let word of words) {
// //     if (freqCounter[word]) {
// //       freqCounter[word] += 1;
// //     } else {
// //       freqCounter[word] = 1;
// //     }
// //   }

// //   return freqCounter;
// // }

// // console.log(wordFrequency("this is a test this is only a test"));


// function charfrequency(str) {
//      const frecounter = {};
//      for(let char of str){
//         if(frecounter[char]) {
//          frecounter[char] +=1;   
//         }  
//         else {
//             frecounter[ char] = 1;
//         }
//      }
//      return frecounter;
//     }     
//     console.log(charfrequency("Hider Hassan Adnan"));
    
 //let input = window.prompt("Enter a sentence:");
//let result;

// function charFrequencyWithSwitch(str) {
//   const freqCounter = {};
//   //const words = str.split(" ");  
//   for (let word of words) {
//     switch (true) {
//       case freqCounter[word] !== undefined:
//         freqCounter[word] += 1;
//         break;
//       default:
//         freqCounter[word] = 1;
//     }
//   }

//   return freqCounter;
// }

// result = charFrequencyWithSwitch(input);
// console.log(result);

 

function fcharrecounter(str) {
    const frecounter = {};
    for(let char of str) {
        if(frecounter[char]){
            frecounter[char] +=1;
        } else {
            frecounter[char] = 1;
        }
    }
    return frecounter;
}
console.log(fcharrecounter("javascript"));