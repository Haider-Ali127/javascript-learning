// prototype A prototype is like a backup plan for objects.prototype is just another object that helps share properties and methods.

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
