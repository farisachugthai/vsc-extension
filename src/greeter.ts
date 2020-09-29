// http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// So I tried adding a JSDoc comment from:
// https://www.typescriptlang.org/play?useJavaScript=truee=4#example/jsdoc-support
// For some reason the snippet works awesome but it's getting marked as
// a problem in VSCode?

/**
 * Say hello a person
 * @param {string} person Person to say hello to
 */
function greeter(person : string) {
    return "Hello, " + person;
}

/** @type: string */
let user: string = "Jane User";

document.body.textContent = greeter(user);

// Interfaces
// Let’s develop our sample further. Here we use an interface that describes
// objects that have a firstName and lastName field.In TypeScript, two types are
// compatible if their internal structure is compatible.This allows us to
// implement an interface just by having the shape the interface requires,
// without an explicit implements clause.

interface Person {
    firstName: string;
    lastName: string;
}

function greeter1(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user1 = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter1(user1);


//  Classes #

//  Finally, let’s extend the example one last time with classes. TypeScript
//  supports new features in JavaScript, like support for class-based
//  object-oriented programming.

//  Here we’re going to create a Student class with a constructor and a few
//  public fields. Notice that classes and interfaces play well together,
//  letting the programmer decide on the right level of abstraction.

//  Also of note, the use of public on arguments to the constructor is a
//  shorthand that allows us to automatically create properties with that name.

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = new Student("Jane", "M.", "User");

document.body.textContent = greeter2(user2);

// Re-run tsc greeter.ts and you’ll see the generated JavaScript is the same as
// the earlier code. Classes in TypeScript are just a shorthand for the same
// prototype-based OO that is frequently used in JavaScript. Running your
// TypeScript web app #