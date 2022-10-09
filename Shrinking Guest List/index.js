const peopleInvited = ["Sultan", "Faisal", "Muneeb"];
for (const people of peopleInvited) {
  console.log(people);
}

console.log(peopleInvited[1] + " can't make it.");

peopleInvited[1] = "Shahzaib";
for (const people of peopleInvited) {
  console.log(people + "!" + "I would like to invite you for dinner");
}

console.log("I found a bigger table. Therefore I having more guests.");

peopleInvited.unshift("Hamza");

peopleInvited.splice(Math.floor(peopleInvited.length / 2), 0, "Rizwan");

peopleInvited.push("Jameel");

for (const people of peopleInvited) {
  console.log("Hey! " + people + "," + " You are invited for a dinner");
}

console.log("I can invite only two people for dinner.");

while (peopleInvited.length > 2) {
  console.log(
    "I'm sorry I can't invite " + peopleInvited.pop() + " to dinner."
  );
}

peopleInvited.forEach((people) => {
  console.log(people + " You are still invited");
});

peopleInvited.splice(0, peopleInvited.length);
console.log(peopleInvited);
