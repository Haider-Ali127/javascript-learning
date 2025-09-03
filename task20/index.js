class person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    get age() {
        return this._age
    }
    set age(newage) {
        this._age = newage
    }
}
const check = new person("Haider", 19);
console.log(check.age);

check.marks = 20
console.log(check.marks)
