// TASK 2 java script
// Question no.1 answer Mini task
// for (let i =1; i <=10; i++) {
//   console.log(i);
// }

// question 2 even num
// for (let i = 2; i <= 20; i++) {
//   if(i %2 == 0){
//     console.log(i);
//   }  
// }

//  question no.3 odd num
// for (let i = 1; i <= 19; i+=2){
//     console.log(i);
//   }


// Question no.4
//   for(let i= 10; i > 0; i--){
//     console.log(i)
// }

// QUESTION NO.5 WHILE LOOP

// let  i = 5;
// while(i <=15){
//   console.log(i);
//   i++
// } 

//  QUESTION NO.6

// let count = 1;
// do {
//   console.log("HELLO WORLD" + count);
//   count ++
// } while(count <= 3); 

// QUESTION NO.7

// let i = 20;

// while(i>=10){
//   console.log(i);
//   i--
// }

// question no. 8
// for (let i = 1; i<=20; i++) {
//   if (i %3 === 0) {
//     console.log(i);
//   }
// }

// question no.9
// for(let i=1; i <= 20; i++) {
//   if (i %2 ==0) {
//     console.log("even number");
//   } else {
//     console.log("odd number");
//   }
// }

// question no.10 lead code fizz buzz question

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizz buzz");

  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
