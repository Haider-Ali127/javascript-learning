//----------------binary search-------------------------//
function binary(nums, target) {
    let start = 0;
    let end = nums.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1
}
console.log(binary([2, 4, 7, 10, 15], 10));

//--------------linear search-------------------------//
function sum(nums, target) {
    for (let i = 0; nums.length; i++) {
        if (target === nums[i]) {
            return i
        }
    }
    return -1
}
console.log(sum([1, 3, 5, 6], 5));
