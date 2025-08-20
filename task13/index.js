//  ------ HOUR 4 ---------------------//
// ------------spread rest operators--------//
// expanding arrays
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let combined = [...arr5, ...arr6];
console.log(combined);

//spreading object to add pass new value and spread in array
let pers = { name: "Haider", age: 19 };
let updated = { ...pers, city: "karachi" };
console.log(updated);

// Rest operators--------
let [first1, second, ...rest] = [10, 2, 30, 40, 50, 60];
console.log(first1);
console.log(second);
console.log(rest);

// rest with object destruction
let obj = { id: 1, name: "haider", city: "karachi", age: 19 }
let { id, ...details } = obj;
console.log(`My id is ${id}`);
console.log(details);


//----- 4hours practise question------------------//
let arr7 = [10, 20, 30]
let arr8 = [40, 50, 60]
let spread = [...arr7, ...arr8]
console.log(spread);

//-------Second question-----------//

const sum = (...nums) => {
    return nums.reduce((addall, n) => addall + n);

}
console.log(sum(10, 20, 30, 40, 50));

