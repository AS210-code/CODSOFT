
let display = document.getElementById('display');
let historyDisplay = document.getElementById('history-display');
let equation = '';
let history = [];

function appendNumber(number) {
    equation += number;
    display.value = equation;
}

function selectOperator(operator) {
    equation += operator;
    display.value = equation;
}

function clearDisplay() {
    equation = '';
    display.value = equation;
}

function calculate() {
    let result = eval(equation);
    display.value = result;
    history.push(equation + '=' + result);
    historyDisplay.textContent = history.join('\n');
    equation = '';
}

historyDisplay.textContent = history.join('\n');