const car = "subaru";
const arr = [];

console.log(car.toLowerCase() === "subaru");
console.log(car.toLowerCase() === "SABARU");

console.log(car === "subaru" && typeof car === "string");
console.log(Array.isArray(arr));

console.log(car === "honda" || typeof car === "number");
console.log(Array.isArray(car));
