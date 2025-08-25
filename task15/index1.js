// 2nd practical task
// it is defined because you can call outside the loop using var which leaks your value and works in console.
for (var i = 0; i < 3; i++) {
    console.log("0 to 3 is: ", i)
}
console.log(i);
// using let it is undefined you cant call it outside the loop
for (let j = 0; j < 3; j++) {
    console.log("0 to 3 is: ", j)
}
// console.log(j);
