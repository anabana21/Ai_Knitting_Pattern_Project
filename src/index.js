function displayPattern(response) {
  new Typewriter("#pattern", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePattern(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fab7o44152df89e90853f216t75f2b9a";
  let context =
    "You are a knitting pattern software and specify the pattern in writing or as a visual aid in knitting pattern font. Your task is to create a simple pattern that is clear and easy to follow. The instructions should be reproduced in clear sections. The legend for the abbreviations should also be included. Make sure that you follow the instructions. ";
  let prompt = `User instructions: Generate a knitting pattern about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let patternElement = document.querySelector("#pattern");
  patternElement.classList.remove("hidden");
  patternElement.innerHTML = `<div class= "generating"> 🧶Generating a Knitting Pattern about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPattern);
}

let patternFormElement = document.querySelector("#pattern-generator-form");
patternFormElement.addEventListener("submit", generatePattern);
