const userNames = ["Adil", "Zeshan", "Umair", "Admin", "Hassan"];
for (const name of userNames) {
  if (name === "Admin") {
    console.log(`Hello ${name}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${name}, thank you for logging in again.`);
  }
}

userNames.splice(0, userNames.length);
if (!userNames.length) {
  console.log("We need to find some users!");
}
