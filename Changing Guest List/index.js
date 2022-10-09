const peopleInvited = ["Sultan", "Faisal", "Muneeb"];
for (const people of peopleInvited) {
  console.log(people);
}

console.log(peopleInvited[1] + " can't make it.");

peopleInvited[1] = "Shahzaib";
for (const people of peopleInvited) {
  console.log(people + "!" + "I would like to invite you for dinner");
}
