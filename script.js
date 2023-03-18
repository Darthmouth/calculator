// This function clear all the values
function clearscreen() {
    document.getElementById("result").value = "";
}

//This function displays values
function display(value) {
    document.getElementById("result").value += value;
}

//This function evaluates the expression and returns result
function calculate() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}