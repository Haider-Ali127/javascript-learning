// practise ques no.3

class person {
    constructor(grade) {
        this.grade = grade
    }
}
class student extends person {
    constructor(name, grade) {
        super(grade)
        this.name = name
    }
    info() {
        return `${this.name} : ${this.grade}`
    }
}

const d1 = new student("Haider Ali", 90)
console.log(d1.info())