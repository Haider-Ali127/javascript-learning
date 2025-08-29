
// Lexical scoping 
function outer() {
    // not defined 
    console.log(secret)
    let name = "Haider"
    let age = 19
    let name2 = "Hassan"
    let age2 = 19
    function inner() {
        let secret = "my123"
        console.log("My name is ", name)
        console.log("My age is ", age)
    }
    function innertwo() {
        console.log("My name is ", name2)
        console.log("My age is ", age2)
        console.log(secret)
    }
    inner()
    innertwo();
}
// outside function not run only access the varibales which is declare inside
outer();
console.log(name);