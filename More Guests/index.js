const peopleInvited = ["Sultan", "Faisal", "Muneeb"];
for (const people of peopleInvited) {
  console.log(people);
}

console.log(peopleInvited[1] + " can't make it.");

peopleInvited[1] = "Shahzaib";
for (const people of peopleInvited) {
  console.log(people + "!" + " I would like to invite you for dinner");
}

console.log("I found a bigger table. Therefore I having more guests.");

peopleInvited.unshift("Hamza");

peopleInvited.splice(Math.floor(peopleInvited.length / 2), 0, "Rizwan");

peopleInvited.push("Jameel");

for (const people of peopleInvited) {
  console.log("Hey! " + people + "," + " You are invited for a dinner");
}
