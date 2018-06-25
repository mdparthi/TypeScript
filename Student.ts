// Classes & Inheritance
import { Person } from './person';

class Student {
    private firstName : string;
    private lastName : string;

    // constructor(firstName : string, lastName : string) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;        
    // }

    constructor(obj : Person) {    
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
    }

    getFullName () : string {
        return " Hello " + this.firstName + " " + this.lastName;
    }
}

// let foo1 = new Student("Foo", "Bar");

let newObj : Person = {
    firstName : "Foo",
    lastName : "Bar",
    age :32
}

let foo1 = new Student(newObj);

console.log(foo1.getFullName());