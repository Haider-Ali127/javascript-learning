//-----------3rd Hour started------------------------//
// array destruction-----
let arr1 = [2, 3, 4];
let [a, b, c] = arr1;
console.log(a);
console.log(c);
console.log(b);

//-----Default values---------------//
let ar = [7];
let [num1, num2 = 100] = ar;
console.log(num1);
console.log(num2);

//---------swapping variablesz------------------//
let h = 1; d = 2;
[h, d] = [d, h];
console.log(h);
console.log(d);

//-----------SKIPPING ARRAYS----------------//
let arr4 = [100, 2, 350, 4];
let [first, , third] = arr4;
console.log(first); // 1
console.log(third); // 3


//---------3rd hour practise question--------------//
let person1 = { name: "Haider", age: 19, city: "karachi" }
let { name: age } = person1;
let { age: name } = person1;
console.log(`my age is ${age}`);
console.log(`my name is ${name}`);


