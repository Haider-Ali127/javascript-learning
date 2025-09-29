//Task 27 : Leet code question 
var arr1 = [4, 9, 5]
var arr2 = [4, 9, 8, 4, 9]

var intersect = arr1.filter((num => {
    return arr2.includes(num);
}))
console.log(intersect)
