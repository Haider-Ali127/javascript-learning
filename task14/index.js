// ------leet code problem solution-----------------//
// function sum1(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         }
//           if (nums[i] > target) {
//             return nums[i] < target;
//         }
//     }
//     return -1;
// }
// console.log(sum1([1, 3, 5, 6], 5));  
// console.log(sum1([1, 3, 5, 7], 2));  

// //-----------Question no.2 leetcode----------//
// function sum1(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(sum1([1, 3, 5, 6], 6)); 
// console.log(sum1([1, 3, 5, 6], 7)); // this is for return -1


// function sum3(nums, target) {

//     for (let i = 0; i < nums.length; i++) {

//         if (target === nums[i]) {
//             return i;
//         }
//         else if (target < nums[i]) {
//             return i;
//         }
//         else if (target > nums[i]) {
//             nums.push(target);
//         }
//     }
//     return -1
// }
// console.log(sum3([1, 3, 5, 6], 5))
// console.log(sum3([1, 3, 5, 6], 2));
// console.log(sum3([1, 3, 5, 6], 7)); 








// Input: nums = [1,3,5,6], target = 5
// Output: 2

// (If found → return index, else → return position where it should be inserted)

// let nums = [1, 3, 5, 6]

function linearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
        else if (target > nums[i]) {
            nums.push(target)
        }
        else if (target < nums[i]) {
            return i
        }
    }
    return -1
}

let arr = [1, 3, 5, 6]
console.log(linearSearch(arr, 8))


// Return the index of the first occurrence of the target. If not found, return -1

function firstOccur(num, target) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] === target) {
            return i
        }
    }
    return -1
}

let array = [4, 2, 3, 4, 4, 4, 5]
console.log(firstOccur(array, 4))


// Return the index where target should be if it is not present.
// (Useful in sorted arrays when inserting a new element.)

// / Example
// console.log(searchInsert([1, 3, 5, 6], 5)); // 2
// console.log(searchInsert([1, 3, 5, 6], 2)); // 1
// console.log(searchInsert([1, 3, 5, 6], 7)); // 4


function insert(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        }
        else if (element > arr[i]) {
            arr.push(element)
        }
        else if (element < arr[i]) {
            return i

        }
    }
}


let numbers = [1, 3, 5, 7]
console.log(insert(numbers, 7))









