// 3rd practical question
// using var it shows undefined but not gives error because it store in TDZ(TEMPORARY DEAD ZONE) and will hosited but undefined 
console.log(a)
var a = 5;
// using let and const you cannot use before decleration the variable.
console.log(b)
let b = 10;
// it will be accesseble after decleration
console.log(b);

