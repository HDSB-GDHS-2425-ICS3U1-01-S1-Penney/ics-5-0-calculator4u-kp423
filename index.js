console.log ("Welcome to Keith's Calculator. Here you are able to use this calculator to add (+), subtract (-), multply(*) and divide (/)")

x = Number(prompt("First number?"));
operator = prompt("Which operator")
y = Number(prompt("Second number?"));

if (operator=="+") {
    result = add(); 
} else if (operator=="-") {
    result = subtract(); 
} else if (operator=="*") {
    result = multiply();
} else if (operator=="/") {
    result = divide();
}
console.log(result)
 
function add() {
return x+y;
 }


function subtract() { 
    return x-y;
}

function multiply() { 
    return x*y;
}

function divide() { 
    return x/y;
}

const operator = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] {
    result = console.log("Error")
}
