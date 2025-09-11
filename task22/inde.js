// prototype inheritence: If an object doesn’t find a property or method, it looks into its prototype.This process is called prototype inheritance.

let parent = {
    canspeak: true,
    speak() {
        console.log("I can speak");
    }
};
let child = {
    canplay: true
};
child.__proto__ = parent;
console.log(child.canplay);
console.log(child.canspeak);
child.speak()


function Animal() { }
Animal.prototype.walk = function () {
    console.log("Animals walk just like a dog")
};
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
    console.log("Dog says WOOF WOOF!")
}
let d = new Dog();
d.walk();
d.bark();


function Animal(name) {
    this.name = name
}
Animal.prototype.speak = function () {
    console.log(this.name + " Makes a sound")
};
function dog(name) {
    Animal.call(this, name)
}
dog.prototype = Object.create(Animal.prototype)
dog.prototype.constructor = dog;

dog.prototype.speak = function () {
    console.log(this.name + " barks");
};

const t = new Animal("Buddy")
t.speak();




function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function () {
    console.log("HELLO, " + this.name);
};

function AgePerson(name, age) {

    Person.call(this, name, age);
}

AgePerson.prototype = Object.create(Person.prototype);
AgePerson.prototype.constructor = AgePerson;

AgePerson.prototype.ageper = function () {
    console.log(this.name + " is " + this.age + " years old");
};

const n = new AgePerson("Haider", 19);
n.hello();
n.ageper();
















