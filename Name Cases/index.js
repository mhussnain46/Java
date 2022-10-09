const person_name = "Muhammad Hussnain";

console.log(person_name.toUpperCase());
console.log(person_name.toLowerCase());
console.log(
  person_name
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")
);
