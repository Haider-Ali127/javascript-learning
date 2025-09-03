// practise exercise    QUES NO.1
class car {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
    getdetails() {
        return ` ${this.brand} \n Model no. ${this.model} \n year ${this.year}`
    }
}
const info = new car("Honda civic", "202", "2024");
console.log(info.getdetails())