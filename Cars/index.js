function generate_cars(manufacturer, model, color, speed) {
  const car = {
    manufacturer,
    model,
  };
  if (color) {
    car["color"] = color;
  }
  if (speed) {
    car["speed"] = speed;
  }
  return car;
}

console.log(generate_cars("Suzuki", "Mehran", "white", 120));
