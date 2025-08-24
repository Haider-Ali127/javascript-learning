// ------leet code problem solution-----------------//
function sum1(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
          if (nums[i] > target) {
            return nums[i] < target;
        }
    }
    return -1;
}
console.log(sum1([1, 3, 5, 6], 5));  
console.log(sum1([1, 3, 5, 7], 2));  

//-----------Question no.2 leetcode----------//
function sum1(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(sum1([1, 3, 5, 6], 6)); 
console.log(sum1([1, 3, 5, 6], 7)); // this is for return -1


function sum3(nums, target) {

    for (let i = 0; i < nums.length; i++) {

        if (target === nums[i]) {
            return i;
        }
        else if (target < nums[i]) {
            return i;
        }
        else if (target > nums[i]) {
            nums.push(target);
        }
    }
    return -1
}
console.log(sum3([1, 3, 5, 6], 5))
console.log(sum3([1, 3, 5, 6], 2));
console.log(sum3([1, 3, 5, 6], 7)); 