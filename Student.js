"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    // constructor(firstName : string, lastName : string) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;        
    // }
    function Student(obj) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
    }
    Student.prototype.getFullName = function () {
        return " Hello " + this.firstName + " " + this.lastName;
    };
    return Student;
}());
// let foo1 = new Student("Foo", "Bar");
var newObj = {
    firstName: "Foo",
    lastName: "Bar",
    age: 32
};
var foo = new Student(newObj);
console.log(foo.getFullName());
