// NAME: Keith Parkinson
// DATE: September 16, 2024
// TITLE: Keith's Calculator


console.log("Welcome to Keith's Calculator. Here you are able to use this calculator to add (+), subtract (-), multply(*), divide (/), Power (^), and Square Root ($)")

x = Number(prompt("First number?"));
operator = prompt("Which operator")
y = Number(prompt("Second number?"));

if (operator == "+") {
    result = add();
} else if (operator == "-") {
    result = subtract();
} else if (operator == "*") {
    result = multiply();
} else if (operator == "/") {
    result = divide();
} else if (operator == "^") {
    result = square();
} else if (operator == "$") {
    result = squareRoot();
} else if (operator == "sin") {
    result = sin();
}
console.log(result)

function add() {
    return x + y;
}

function subtract() {
    return x - y;
}

function multiply() {
    return x * y;
}

function divide() {
    return x / y;
}

function square() {
    return Math.pow(x, y);
}

function squareRoot() {
    return Math.sqrt(x);
}

function sin() {
    return Math.sin(x)
}