function make_shirt(size = "large", message = "I love JavaScript") {
  console.log(
    `The size of shirt should be ${size} and it should contain a message "${
      size === "large" || size === "medium" ? "I love JavaScript" : message
    }"`
  );
}
make_shirt("small", "I am not in danger. I am the danger");
