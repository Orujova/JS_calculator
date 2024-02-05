let currentInput = "";
let currentOperator = "";
let resultDisplayed = false;

function appendNumber(number) {
  if (resultDisplayed) {
    clearInput();
    resultDisplayed = false;
  }
  currentInput += number;
  updateResult();
}

function setOperator(operator) {
  if (currentOperator !== "") {
    calculateResult();
  }
  currentOperator = operator;
  currentInput += " " + operator + " ";
  updateResult();
}

function calculateSqrt() {
  if (currentInput !== "") {
    currentInput = Math.sqrt(parseFloat(currentInput));
    updateResult();
    resultDisplayed = true;
  }
}

function removeLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  updateResult();
}

function calculateResult() {
  if (currentInput !== "") {
    let expression = currentInput.replace(/x/g, "*");
    try {
      let result = eval(expression);
      currentInput += `\n=  \n   ${result}`;
      updateResult();
      resultDisplayed = true;
      currentOperator = "";
    } catch (error) {
      currentInput = "Error";
      updateResult();
    }
  }
}

function clearInput() {
  currentInput = "";
  currentOperator = "";
  updateResult();
}

function updateResult() {
  document.getElementById("result").value = currentInput;
}
