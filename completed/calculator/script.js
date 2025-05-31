const display = document.getElementById("display");

const append = (value) => {
  const lastChar = display.value.slice(-1);
  const ops = ['+', '-', '*', '/'];

  if (ops.includes(value) && ops.includes(lastChar)) return;

  display.value += value;
};

const clearDisplay = () => {
  display.value = "";
};

const calculate = () => {
  try {
    const result = safeEval(display.value);
    display.value = result;
  } catch {
    display.value = "Error";
  }
};

// Safe evaluation
function safeEval(expr) {
  // Only allow digits, operators and decimal points
  if (!/^[\d+\-*/.() ]+$/.test(expr)) throw "Invalid characters";

  // Create a new function (safer than eval)
  return Function('"use strict"; return (' + expr + ')')();
}
