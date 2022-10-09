const current_users = ["Adil", "Zeshan", "Umair", "Admin", "Hassan"];
const new_users = ["Adil", "Jhonny", "Max", "Harry", "Hassan"];

for (const name of new_users) {
  if (current_users.includes(name)) {
    console.log(name + " will need to enter a new username.");
  } else {
    console.log("The username " + name + " is available.");
  }
}
