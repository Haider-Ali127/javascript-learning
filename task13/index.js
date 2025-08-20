//--------LEET CODE QUESTION-------------//
function sum(num, target) {
    for (let i = 0; i < num.length; i++) {
        for (let j = 1; j < num.length; j++) {
            if (num[i] + num[j] === target) {
                return [i, j]
            }
        }
    }
}
console.log(sum([1, 2, 3, 4, 5, 6], 11));

