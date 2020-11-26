/**
 *
 * @param {string} inputValue function for calculating the inputs according to the operation
 *
 */

function calculate(inputValue) {
  const experssion = /\+|\-|\*|\//;
  const numbers = inputValue.split(experssion);
  const numberA = parseInt(numbers[0]);
  const numberB = parseInt(numbers[1]);
  const operation = inputValue.match(experssion);
  if (Number.isNaN(numberA) || Number.isNaN(numberB) || operation === null) {
    updateResult("Operation not recognized");
    return;
  }
  const calculator = new Calculator();
  calculator.add(numberA);
  let result;
  switch (operation[0]) {
    case "+":
      result = calculator.add(numberB);
      break;
    case "-":
      result = calculator.substract(numberB);
      break;
    case "*":
      result = calculator.multiply(numberB);
      break;
    case "/":
      result = calculator.divide(numberB);
      break;
  }
  updateResult(result);
}

function updateResult(result) {
  const element = document.getElementById("result");
  if (element) {
    element.innerText = result;
  }
}

function showVersion() {
  const calculator = new Calculator();
  const element = document.getElementById("version");
  calculator.version
    .then(function (version) {
      element.innerText = version;
    })
    .catch(function () {
      element.innerText = "unknown";
    });
}
