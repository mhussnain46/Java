const magician_names = ["Lance Burton", "Ricky Jay", "Mark Wilson"];

function show_magicians(magicians) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " The Great";
  }
}

make_great(magician_names);
show_magicians(magician_names);
