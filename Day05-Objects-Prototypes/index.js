// Day 05 - Objects & Prototypes
function Person(name) { this.name = name; }
Person.prototype.greet = function() { return `Hi, I'm ${this.name}`; };

function Student(name, roll) {
  Person.call(this, name);
  this.roll = roll;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.info = function() { return `${this.name} - ${this.roll}`; };

const s = new Student('Jay', 42);
console.log(s.greet());
console.log(s.info());
