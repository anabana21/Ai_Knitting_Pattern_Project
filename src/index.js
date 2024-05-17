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
    "You are a knitting pattern expert and give the pattern written or as a visual help in knitting pattern font. Your mission is to generate a easy pattern in basic HTML. Make sure to follow the user instructions. ";
  let prompt = `User instructions: Generate a knitting pattern about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPattern);
}

let patternFormElement = document.querySelector("#pattern-generator-form");
patternFormElement.addEventListener("submit", generatePattern);
