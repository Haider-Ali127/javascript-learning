// leet code ques no.2
let arr1 = [1, 1, 2, 2, 3, 3, 4, 4]
let arr2 = []

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr1[i + 1]) {
        arr2.push(arr1[i])
    }
}
console.log(arr2)