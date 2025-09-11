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
const r1 = new Rectangle(20, 6)
r1.Area()