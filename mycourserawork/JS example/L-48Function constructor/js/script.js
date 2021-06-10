//function Constructors
/*function Circle (radius) {
    this.radius = radius;
  }

  Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };

  var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);*/

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
    console.log(this.name + " likes barking! Bark!");
    return this.name;
  }
  
  var max = new Dog("Max");
  console.log (max.bark());
  
  var buddy = new Dog ("Buddy");
  console.log(buddy.bark());