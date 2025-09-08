// A static method belongs to the class itself, not to an object (instance).
// You call it using the class name, not an object.

class mul {
    static num(a, b) {
        return a * b
    }
}
console.log("THE ANS OF TWO NUM MUTIPLY IS:", mul.num(10, 20))

// if you want to make an object using static method use in standered way
class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static createper() {
        return new person("Anonymus", 18)
    }
}
const p1 = person.createper();
console.log("MY NAME IS : ", p1.name, + " " + "MY AGE IS:", p1.age)