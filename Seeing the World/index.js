const favoritePlaces = ["Canada", "Japan", "Russia", "South Korea", "America"];
console.log(favoritePlaces);

const orderedPlaces = [...favoritePlaces].sort();
orderedPlaces.forEach((place) => {
  console.log(place);
});

console.log(favoritePlaces);

console.log(orderedPlaces.reverse());

console.log(favoritePlaces);

favoritePlaces.reverse();
console.log(favoritePlaces);

favoritePlaces.reverse();
console.log(favoritePlaces);

favoritePlaces.sort();
console.log(favoritePlaces);

favoritePlaces.reverse();
console.log(favoritePlaces);
