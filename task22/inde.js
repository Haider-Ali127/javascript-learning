//TASK 22 STARTED: prototype A prototype is like a backup plan for objects.prototype is just another object that helps share properties and methods.

function person(name) {
    this.name = name
}
person.prototype.sayhello = function () {
    console.log("HELLO MY NAME IS " + this.name)
}
const p1 = new person("haider")
p1.sayhello()
const p2 = new person("ali")
p2.sayhello()
const p3 = new person("hussain")
p3.sayhello()
const p4 = new person("ismail")
p4.sayhello()
const p5 = new person("ali")
p5.sayhello()








// prototype inheritence: If an object doesn’t find a property or method, it looks into its prototype.This process is called prototype inheritance.

function person(name) {
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










    // practise task(prototype)
    function Shape(width, height) {
        this.width = width;
        this.height = height;

        Shape.prototype.Area = function () {
            console.log("Hello")
        }
    }
    function Rectangle(width, height) {
        Shape.call(this, width, height)
    }
    Rectangle.prototype = Object.create(Shape.prototype)
    Rectangle.prototype.constructor = Rectangle
    Rectangle.prototype.Area = function () {
        console.log(this.width * this.height)
    }






    //leet code question no.1 reverse an integer:
    function reverse(num) {
        if (num >= 0 && num <= 9) {
            return num;
        }

        let reversenum = 0;

        while (num !== 0) {
            reversenum = reversenum * 10 + (num % 10)
            num = Math.floor(num / 10)
        }
        return reversenum
    }
    console.log(reverse(12345))







    // leet code last ques  remove duplicate number from array:
    let arr1 = [1, 1, 2, 2, 3, 3, 4, 4]
    let arr2 = []

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr1[i + 1]) {
            arr2.push(arr1[i])
        }
    }
    console.log(arr2)



















