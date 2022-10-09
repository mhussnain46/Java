function printMessage(strings, name) {
  return `${strings[0]}${personName}${strings[1]}`;
}
const personName = "Muhammad Hussnain";
const message = printMessage`Hello ${personName}, would you like to learn some Python today?`;
console.log(message);
