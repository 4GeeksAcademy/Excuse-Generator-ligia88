window.onload = function() {
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

  // Function to generate a random excuse
  function generateExcuse() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
    return excuse;
  }

  // Get the excuse element by its id
  let excuseElement = document.getElementById("excuse");

  // Set the innerHTML of the excuse element to a randomly generated excuse
  excuseElement.innerHTML = generateExcuse();
};
