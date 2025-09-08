class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
class Age extends person {
    constructor(name, age, id) {
        super(name, age)
        this.id = id
    }
    hello() {
        console.log("My name is: ", this.name)
        console.log("My age is :", this.age)
        console.log("My id is: ", this.id)
    }
}
const age2 = new Age("Haider", 19, 1526);
age2.hello()
