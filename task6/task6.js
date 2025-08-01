// let names = ["Ali", "sara", "Zaid", "Hassan", "adnan","HaiderA"];
// let marks = [78, 92, 60, 55,30, 98];
// let pass = 0;
// let fail = 0;
// let grade = "";


// for(let i = 0; i < names.length; i++) {
//     if(marks[i] >= 90 ) {
//         grade = "A grade";
//         pass +=1;
//     } else if (marks[i] >= 80) {
//         grade = "B grade";
//         pass += 1;
//     }
//      else if (marks[i] >= 70) {
//         grade = "C grade";
//         pass += 1;
//     }
//      else if (marks[i] >= 60) {
//         grade = "D grade";
//         pass += 1;
//     } 
//      else if (marks[i] < 60) {
//         grade = "F grade";
//         fail += 1;
//     } 
//     else{
//         console.log("Fail");
//     } 
//     console.log(`${names[i]} scored ${marks[i]} and got ${grade}`)
// }

// console.log(`Total passed: ${pass}`);
// console.log(`Total passed: ${fail}`);

 

function grade(n) {
    if (n >= 90) {
         return " A grade"
    } else if (n >= 70) {
          return  " B grade"
    }
     else if (n >= 60) {
          return  " C grade"
    } else {
       return  " Fail"
    }
}

let n = parseFloat(prompt("Enter an number:"));
let name = window.prompt("Enter an name:");

console.log(`${name} get ${n} marks and ${grade(n)}`);