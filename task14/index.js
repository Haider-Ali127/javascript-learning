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

// Time Complexity

// Best case  O(1) (target is exactly middle).

// Worst case  O(log n).

// Average case  O(log n).

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

// -------------Hour 4-----------------//

// Time Complexity

// Best case   O(1) (target at first element).

// Worst case  O(n) (target at end or not found).

// Average case  O(n/2) ≈ O(n).

// Answer: Binary Search is better in efficiency when the data is sorted.
// If data is unsorted  use Linear Search.
