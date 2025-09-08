//ENCAPSULATION USING  GETTER & SETTER METHOD 
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0) {
            this._age = value;
        } else {
            console.log("Age must be positive!");
        }
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.trim() !== "") {
            this._name = value;
        } else {
            console.log("Name cannot be empty!");
        }
    }
}

const p1 = new Person("Haider", 19);

console.log(p1.age);
p1.age = 25;
console.log(p1.age);
p1.age = -5;
console.log(p1.age);

p1.name = ""
console.log(p1.name)