window.onload = function() {
  // Function to generate a random excuse
  function generateExcuse(who, action, what, when) {
    // Select a random element from each array
    let randomWho = getRandomElement(who);
    let randomAction = getRandomElement(action);
    let randomWhat = getRandomElement(what);
    let randomWhen = getRandomElement(when);

    // Combine the random elements into an excuse string
    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
    return excuse;
  }

  // Helper function to get a random element from an array
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Array of possible "who" options
  let who = ["The cat", "My grandma", "His turtle", "My bird"];

  // Array of possible "action" options
  let action = ["ate", "peed", "crushed", "broke"];

  // Array of possible "what" options
  let what = ["my homework", "the keys", "the car"];

  // Array of possible "when" options
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // Get the excuse element by its id
  let excuseElement = document.getElementById("excuse");

  // Set the innerHTML of the excuse element to a randomly generated excuse
  excuseElement.innerHTML = generateExcuse(who, action, what, when);
};
