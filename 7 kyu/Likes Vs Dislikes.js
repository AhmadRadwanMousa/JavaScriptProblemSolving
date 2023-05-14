function likeOrDislike(buttons) {
  let count = 0;
  let test;
  if (buttons.length === 0) {
    return "Nothing";
  }
  while (buttons.length !== 0) {
    test = buttons.pop();
    if (test === buttons[buttons.length - 1]) {
      count++;
      continue;
    } else {
      break;
    }
  }
  if (count % 2 === 0) {
    return test;
  } else return "Nothing";
}
const buttonInput = [];
buttonInput.push("Dislike");
buttonInput.push("Like");
console.log(likeOrDislike(buttonInput));
