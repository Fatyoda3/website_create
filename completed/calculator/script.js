const inputField = document.getElementById("input");

let AppendToDisplay = (x) => {
  let currentValue = inputField.value;

  // Clear the display if the last character is an operator and new input is also an operator
  if (['+', '-', '*', '/'].includes(x) && ['+', '-', '*', '/'].includes(currentValue.slice(-1))) {
    // Do nothing if the last character and the new input are both operators
    return;
  }

  // Append the new symbol
  inputField.value += x;
};

let ClearDisplay = () => (inputField.value = "");

let CalculateDisplay = () => {
  try {
    inputField.value = eval(inputField.value);
  } catch (error) {
    inputField.value = "Error";
  }
};
