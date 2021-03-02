// 1. Define a variable named `students` and assign a blank object to it
let student = {};
// 2. Add a key of the value of variable `studentName` in the object created above with the value of your name.

// 3. Using `console.log` log the value of `studentName` key from the `students` object
student.studentname = "farhan";

console.log(student[`studentname`]);

// 4. Add a another key of the value of variable `batch` in the object with the value of 16.

// 5. Using `console.log` log the value of `batch` key from the `students` object
student.batch =16;

console.log(student[`batch`]);

// 6. Add another key in the object with the value of the variable `isAdult`. The value of the key should be `true/false`
student.isadult=student.age > 18 ? true : false;
// 7. Using `console.log` print the value of `isAdult` key from the `students` object
console.log(student[`isadult`]);
// 8. Add a another key of `42` to the object with a value of `The answer to the meaning of life`.

// 9. Using `console.log` print the value of key `42` from the `students` object
student[42]="The answer to the meaning of life";
// 10. Check the length of object named `students`.
console.log(student[42]);
// 11. Can you define a key of `let or var` in any object? Reason.
/* We can't as the object doesnt as the property inside is key value of an object */
// 12. Delete the `isAdult` property from the object `students`. Also, print the object before or after deleting the property
student;
delete student.isadult;
student;
// 13. Update the value of the key batch in the object `students` and print it using `console.log`
student.batch=43;
console.log(student[`batch`]);
