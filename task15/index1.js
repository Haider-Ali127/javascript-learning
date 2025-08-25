// 4th question FUNCTION HOSTING 
// this code will run in function dec it allows the code to access run before decleration
sayhaider();
function sayhaider() {
    console.log("Haider");
}
// but here function expression not allow to execute or invoke func before dec so this will give referenceerror
sayhaider();
let sayhaider = function () {
    console.log("Haider");
}
