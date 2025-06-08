// Write a java script function named pluralize that:
// • takes 2 arguments, a noun and a number.
// • returns the number and pluralized form, like "5 cats" or "1 dog".
// • Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number) 
{
  const irregulars = {
    sheep: "sheep",
    goose: "geese",
    person: "people",
    mouse: "mice"
  };

  let plural = noun;

  if (number !== 1) {
    if (irregulars[noun]) {
      plural = irregulars[noun];
    } else {
      plural = noun + 's';
    }
  }

  return `${number} ${plural}`;
}

// Examples
console.log(pluralize("cat", 5));    // "5 cats"
console.log(pluralize("dog", 1));    // "1 dog"
console.log(pluralize("sheep", 3));  // "3 sheep"
console.log(pluralize("goose", 2));  // "2 geese"
