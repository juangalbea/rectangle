class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculatePerimeter(width, height) {
    return 2*(this.width + this.height);
  }
  calculateArea(width, height) {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width);
    this.height = width;
  }
}

let r1 = new Rectangle(6,7)
console.log('Perimeter of r1 =', r1.calculatePerimeter()) // 26
console.log('Area of r1 =', r1.calculateArea()) // 42

var s1 = new Square(5)
console.log('Perimeter of s1 =', s1.calculatePerimeter()) // 20
console.log('Area of s1 =', s1.calculateArea()) // 25

var s2 = new Square(10)
console.log('Perimeter of s2 =', s2.calculatePerimeter()) // 40
console.log('Area of s2 =', s2.calculateArea()) // 100