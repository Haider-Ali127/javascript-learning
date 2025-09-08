// LAST LEET CODE QUESTIION
function valid(str) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let char of str) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false
            }
        }
    }
    return stack.length === 0
}
console.log(valid("()[]{}"))
console.log(valid("(]"))
console.log(valid("({[]})"))
































































































































