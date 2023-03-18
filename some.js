var buttons = document.querySelectorAll(".btn");
var screen = document.querySelector(".calscreen");

var number1 = "";
var number2 = "";
var operator = "";

function screenvalue(value) {
  if (operator === ""){
   
    number1 += value;
    screen.textContent = number1;
  } else {
   
    number2 += value;
    screen.textContent = number2;
  }
}

function opt(value) {
  if (operator === "") {
    
    operator = value;
    screen.textContent = operator;
  } else {
    
    var result = reasult(number1, number2, operator);
    screen.textContent = result;
    number1 = result;
    number2 = "";
    operator = value;
  }
}

function reasult(number1, number2, operator) {
  var n1 = parseFloat(number1);
  var n2 = parseFloat(number2);
  switch (operator) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    case "X":
      document.body.style.backgroundColor = "black";
    case "p":
      document.querySelector(".screen").innerHTML = "hy"


    default:
      return " ";

      
  }
}

function clearScreen() {
  number1 = "";
  number2 = "";
  operator = "";
  screen.textContent = "0";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    var value = button.textContent;
    if (!isNaN(value) || value === ".") {
      screenvalue(value);
    } else if (value === "C") {
      clearScreen();
    } else {
      opt(value);
    }
  });
});
