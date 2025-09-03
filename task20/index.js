// practical exercise no.4
class student {
    constructor(grade) {
        this.grade = grade
    }
    static compare(s1, s2) {
        if (s1.grade > s2.grade) {
            return ` student 1 get higher grade`
        } else {
            return `student 2 get higher grade`
        }
    }
}
const student1 = new student(40)
const student2 = new student(80)

console.log(student.compare(student1, student2))
console.log("you got a grade congratulations")