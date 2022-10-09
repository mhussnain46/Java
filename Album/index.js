function make_album(name, title, tracks) {
  const album = {
    artistName: name,
    albumTitle: title,
  };

  if (tracks) {
    album["tracks"] = tracks;
  }

  return album;
}

console.log(make_album("Black Sabbath", "Sabbath Bloody Sabbath"));
console.log(make_album("Whitney Houston", "The Bodyguard", 7));
console.log(make_album("Primal Scream", "Screamadelica"));
