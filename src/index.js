function generatePattern(event) {
  event.preventDefault();

  new Typewriter("#pattern", {
    strings: "heart, stars and a flower",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let patternFormElement = document.querySelector("#pattern-generator-form");
patternFormElement.addEventListener("submit", generatePattern);
