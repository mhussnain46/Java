function printMessage(strings, name) {
  return `${strings[0]}${personName}${strings[1]}`;
}
const personName = "Muhammad Hussnain";

/* function store first parameter a Array due to Tagged Template */

const message = printMessage`Hello ${personName}, would you like to learn some Python today?`;
console.log(message);

const person = "  \t Muhammad Hussnain  \n";
console.log(person);

/* Trimmed White spaces using trim method */

console.log(person.trim());
