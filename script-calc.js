let display = document.getElementById('numInput');
let operations = document.querySelectorAll('.operation');
let arrayOperation = [];
console.log(operations);
/*
operations.addEventListener('click', () => {
    arrayOperation.push(operations.)
});
*/
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operators = ['+', '-', '*', '/'];
const commands = ['AC', 'Del', '='];
let currentInput = '';
let first = null;
let operator = null;
let operationsArray = [];
operations.forEach((divClicked) => {        
    divClicked.addEventListener('click', () => {
        const numInput = divClicked.innerText;
        if((operators.includes(numInput) && currentInput === '') || (operators.includes(numInput) && operator !== null)) {
            alert('Please enter a valid number');
            return;
        }
        else {
            if(numbers.includes(numInput) && operator === null) {
                currentInput += numInput;
                display.innerText = `${currentInput}`;
            }
            else if(operators.includes(numInput)) {
                first = parseFloat(display.innerText);
                operationsArray.push(first);
                currentInput = '';
                operator = numInput; 
                operationsArray.push(operator);
                operator = null;
            }
            else if(numbers.includes(numInput) && first !== null) {
                currentInput += numInput;
                display.innerText = `${currentInput}`;
                
            }
            else if(numInput === '=') {
                operationsArray.push(parseFloat(display.innerText));
                console.log(operationsArray);
                display.innerText = calculate(operationsArray);
                operationsArray = [];
            }
        }
        console.log(operationsArray);
        if(numInput === 'AC') {
            operationsArray = [];
            display.innerText = '0';
            operator = null;
            first = null;
            currentInput = '';
        }
        if(numInput === 'Del') {
            console.log(currentInput.length);
            if(currentInput.length > 0) {
                currentInput = currentInput.slice(0, -1); //JS strings are immutable, i.e. creates a new string on string operations.
                display.innerText = `${currentInput}`;
            }
            else if(operationsArray.length > 0) {
                operationsArray.pop();
                currentInput = operationsArray.pop().toString();
                display.innerText = `${currentInput}`;
            }
            
            console.log(currentInput.length);
        }
    });
});

function calculate(operationArray) {
    calculateFirst(operationArray);
    for(let i = 1; i < operationArray.length - 1; i++) {
        if(operationArray[i] === '+') {
            operationArray[i - 1] += operationArray [i + 1];
            operationArray.splice(i, 2);
            i--;
        }
        else if(operationArray[i] === '-') {
            operationArray[i - 1] -= operationArray [i + 1];
            operationArray.splice(i, 2);
            i--;
        }
    }
    return operationArray[0];
}
function calculateFirst(operationArray) {
    for(let i = 1; i < operationArray.length - 1; i++) {
        if(operationArray[i] === '*') {
            operationArray[i - 1] *= operationArray [i + 1];
            operationArray.splice(i, 2);
            i--;
        }
        else if(operationArray[i] === '/') {
            operationArray[i - 1] /= operationArray [i + 1];
            operationArray.splice(i, 2);
            i--;
        }
    }
}
/*
let currentNumString = '';
let currentNum = 0;
let operationArray = [];
if(operators.includes(arrayOperation[0]) || operators.includes(arrayOperation[arrayOperation.length - 1])) {
    alert('Please enter a valid number');
}
else {
    for(let i = 0; i < arrayOperation.length - 1; i++) {
        if(numbers.includes(arrayOperation[i]) && (!operators.includes(arrayOperation[i + 1]))) {
            currentNumString += arrayOperation[i];
        }
        else if(numbers.includes(arrayOperation[i]) && (operators.includes(arrayOperation[i + 1]))) {
            currentNum = parseFloat(currentNumString);
            operationArray.push(currentNum);
        }
        else if(operators.includes(arrayOperation[i]) && (!operators.includes(arrayOperation[i + 1]))) {
            operationArray.push(arrayOperation[i]);
        }
        else {
            alert('Please enter a valid operator');
        }
        console.log(operationArray);
    }
}
*/