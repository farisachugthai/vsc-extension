// http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.textContent = greeter(user);
function greeter1(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user1 = { firstName: "Jane", lastName: "User" };
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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = new Student("Jane", "M.", "User");
document.body.textContent = greeter2(user2);
// Re-run tsc greeter.ts and you’ll see the generated JavaScript is the same as
// the earlier code. Classes in TypeScript are just a shorthand for the same
// prototype-based OO that is frequently used in JavaScript. Running your
// TypeScript web app #
